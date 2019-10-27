---
source: https://github.com/MeilCli/nuget-update-check-action
name: nuget-update-check-action
---
JavaScriptベースの使用しているNuGetのパッケージの更新確認をするGitHub Actionsのアクション

## 必須
このアクションは[setup-dotnet](https://github.com/actions/setup-dotnet)と`dotnet restore`の後に実行する必要があります

.NET Coreのバージョンは2.2以上が必要です

## サンプル
[8398a7/action-slack](https://github.com/8398a7/action-slack)を使ったSlackへの通知サンプル:

```yaml
name: Check Package

on: 
  schedule:
    - cron: '0 8 * * 5' # every friday AM 8:00
jobs:
  nuget:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: actions/setup-dotnet@v1
      with:
        dotnet-version: '3.0.100'
    - run: dotnet restore
    - uses: MeilCli/nuget-update-check-action@v1
      id: outdated
    - uses: 8398a7/action-slack@v2
      if: steps.outdated.outputs.has_nuget_update != 'false'
      with:
        status: ${{ job.status }}
        text: ${{ steps.outdated.outputs.nuget_update_text }}
        author_name: GitHub Actions
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

## インプット
- `project_or_solution_files`
  - オプション
  - 実行対象のプロジェクトまたはソリューションファイル
  - 複数のファイルを実行する場合は複数行にします
- `config`
  - オプション
  - 新しいパッケージの検索に使用するNuGetのソース
- `source`
  - optional
  - 新しいパッケージの検索に使用するNuGetのソース
- `frameworks`
  - 指定されたターゲットフレームワークに適用可能なパッケージのみを表示します
  - 複数のファイルを実行する場合は複数行にします
- `highest_minor`
  - オプション
  - 新しいパッケージを検索するときに、メジャーバージョン番号が一致するパッケージのみを考慮します
  - 値: `true`または`false`, デフォルト: `false`
- `highest_patch`
  - オプション
  - 新しいパッケージを検索するときに、メジャーバージョン番号とマイナーバージョン番号が一致するパッケージのみを考慮します
  - 値: `true`または`false`, デフォルト: `false`
- `include_prerelease`
  - オプション
  - 新しいパッケージを検索するときに、プレリリースバージョンのパッケージを考慮します
  - 値: `true`または`false`, デフォルト: `false`

## アウトプット
- `has_nuget_update`
  - 新しいパッケージバージョンがあったかどうか
  - 値: `true`または`false`
- `nuget_update_text`
  - 新しいパッケージバージョン情報のテキスト
- `nuget_update_json`
  - 新しいパッケージバージョン情報のJson

## ライセンス
MIT License