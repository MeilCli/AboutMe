---
source: https://github.com/MeilCli/gradle-update-check-action
name: gradle-update-check-action
---
JavaScriptベースのGradleで使用しているライブラリーの更新確認をするGitHub Actionsのアクション

## 感謝
このアクションは[ben-manes/gradle-versions-plugin](https://github.com/ben-manes/gradle-versions-plugin)を使用しています

## 必須
このアクションは[setup-java](https://github.com/actions/setup-java)をしてから実行する必要があります。また、リポジトリーにgradle wrapper関連のファイルを含めている必要があります

## サンプル
[8398a7/action-slack](https://github.com/8398a7/action-slack)を使用したSlackへの通知のサンプル:

```yaml
name: Check Package

on: 
  schedule:
    - cron: '0 8 * * 5' # every friday AM 8:00
jobs:
  maven:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: actions/setup-java@v1
      with:
        java-version: 1.8
    - name: Grant permission
      run: chmod +x gradlew
    - uses: MeilCli/gradle-update-check-action@v1
      id: outdated
    - uses: 8398a7/action-slack@v2
      if: steps.outdated.outputs.has_maven_update != 'false'
      with:
        status: ${{ job.status }}
        text: ${{ steps.outdated.outputs.maven_update_text }}
        author_name: GitHub Actions
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

## インプット
- `build_gradle_files`
  - オプション
  - 実行対象のルートbuild.gradleファイル
  - 複数のファイルを実行する場合は複数行にします
- `skip_plugin_dependency`
  - オプション
  - gradle-versions-pluginの依存を自動で追加しないようにします
  - 値: `true`または`false`, デフォルト: `false`
- `revision`
  - オプション
  - チェックするrevisionを指定する
  - 詳細な情報は[ben-manes/gradle-versions-plugin](https://github.com/ben-manes/gradle-versions-plugin)を見てください
  - 値: `release`または`milestone`または`integration`, デフォルト: `release`
- `output_text_style`
  - オプション
  - 出力するテキストのスタイルです
  - 値: `short`または`long`, デフォルト: `short`

## アウトプット
- `has_maven_update`
  - 新しいパッケージバージョンがあったかどうか
  - 値: `true`または`false`
- `maven_update_text`
  - 新しいパッケージバージョン情報のテキストです
- `maven_update_json`
  - 新しいパッケージバージョン情報のJsonです

## ライセンス
MIT License