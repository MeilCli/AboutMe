---
source: https://github.com/MeilCli/setup-crystal-action
name: setup-crystal-action
---
JavaScriptベースのCrystal環境をセットアップするGitHub Actionsのアクション

## 必須事項
`setup-crystal-action`はLinuxまたはmacOSで実行する必要があります、GitHub ActionsでWSLを動かす方法がわからないためWindowsでは実行できません

## 例

```yaml
name: CI

on: 
  push:
    branches:    
    - master
  pull_request:
    branches:
    - master

jobs:
  example:
    runs-on: ubuntu-16.04
    steps:
      - uses: MeilCli/setup-crystal-action@v1
        with: 
          crystal_version: 0.31.1
          shards_version: 0.9.0
          github_token: ${{ secrets.GITHUB_TOKEN }}
      - name: Run Crystal
        run: |
          echo 'puts "Hello Crystal"' > hello.cr
          crystal run hello.cr
```

## インプット
- `crystal_version`
  - 必須
  - インストールするCrystalバージョン
  - 値: `latest`またはバージョン情報です、バージョン情報は[crystal-lang/crystal](https://github.com/crystal-lang/crystal/releases)を見てください
  - デフォルト: `latest`
- `shards_version`
  - 必須
  - インストールするShardsバージョン
  - 値: `latest`または`skip`またはバージョン情報です、バージョン情報は[crystal-lang/shards](https://github.com/crystal-lang/shards/releases)を見てください
    - `skip`を設定したらShardsのインストールを行いません
  - デフォルト: `latest`
- `github_token`
  - 必須
  - GitHub Tokenです、crystal-lang/crystalまたはcrystal-lang/shardsのGitHub Releaseを取得するために使います

## アウトプット
- `installed_crystal_json`
  - インストールされたCrystalのGitHub Release AssetのJsonです
- `installed_shards_json`
  - インストールされたShardsのGitHub ReleaseのJsonです

## ライセンス
MIT License