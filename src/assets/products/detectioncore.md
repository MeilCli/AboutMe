---
source: https://github.com/MeilCli/DetectionCore
name: DetectionCore
---
.NET Standard向けのUserAgentからブラウザ情報を検出するライブラリー

## NuGet

[NuGet](https://www.nuget.org/packages/DetectionCore/)

~~~
Install-Package DetectionCore
~~~

## 検出
### ブラウザ
- Internet Explorer
- Microsoft Edge
- Chrome
- Firefox
- Safari
- Opera
- NintendoBrowser

```csharp
string userAgent = "mozilla/5.0 (Linux; Android 6.0.1; Nexus 5x build/mtc19t applewebkit/537.36 (KHTML, like Gecko) Chrome/51.0.2702.81 Mobile Safari/537.36";
if (userAgent.TryDetectBrowser(out BrowserType browserType, out string? browserDetail))
{
    Console.WriteLine($"BrowserType: {Enum.GetName(typeof(BrowserType), browserType)}"); // BrowserType: Chrome
    Console.WriteLine($"Browser: {browserDetail}"); // Browser: Chrome 51
}
```

### プラットフォーム
- Windows(each consumer version, over WindowsXP)
- MacOS(each version, over Mac OS X v10.5)
- Chrome OS
- Ubuntu
- Mint Linux
- Fedora
- Gentoo
- FreeBSD
- OpenBSD
- NetBSD
- Nintendo Wii
- Nintendo WiiU
- Nintendo Switch
- Nintendo 3DS
- PlayStation 2
- PlayStation 3
- PlayStation 4
- PlayStation Vita
- iOS
- Android
- Windows Phone

```csharp
string userAgent = "mozilla/5.0 (Linux; Android 6.0.1; Nexus 5x build/mtc19t applewebkit/537.36 (KHTML, like Gecko) Chrome/51.0.2702.81 Mobile Safari/537.36";
if (userAgent.TryDetectPlatform(out PlatformType platformType, out string? platformDetail))
{
    Console.WriteLine($"PlatformType: {Enum.GetName(typeof(PlatformType), platformType)}"); // PlatformType: Android
    Console.WriteLine($"Platform: {platformDetail}"); // Android 6.0.1
}
```

## 新しい検出のリクエスト
[@MeilCli](https://github.com/MeilCli)は普段はこのライブラリーを使用していません、しかし新しい検出のリクエストがあれば追加しようと考えています

[テンプレートからIssueを作成](https://github.com/MeilCli/DetectionCore/issues/new/choose)

## 開発環境
- C# 8.0
- Visual Studio 2019
- .NET Core 2.2 and 3.0

[See Contributing Document](https://github.com/MeilCli/DetectionCore/blob/master/.github/CONTRIBUTING.md)

## ライセンス
MIT License

### 使用しているライブラリー
- [MIT License](https://github.com/dotnet/corefx/blob/master/LICENSE.TXT)で公開されている[System.Memory](https://www.nuget.org/packages/System.Memory/)