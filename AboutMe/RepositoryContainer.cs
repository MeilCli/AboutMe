using System.Collections.Generic;
using System.Linq;

namespace AboutMe
{
    public static class RepositoryContainer
    {
        public static IList<Repository> Cards { get; }

        public static IList<string> Tags { get; }

        static RepositoryContainer()
        {
            Cards = new List<Repository>();

            Cards.Add(new Repository(
                "Jfol",
                "https://github.com/MeilCli/Jfol",
                "JSON Formation Language spec",
                new[] { "Jfol" }
            ));
            Cards.Add(new Repository(
                "Jfol.TS",
                "https://github.com/MeilCli/Jfol.TS",
                "Jfol TypeScript implementation",
                new[] { "Jfol", "TypeScript" }
            ));
            Cards.Add(new Repository(
                "Jfol.Playground",
                "https://github.com/MeilCli/Jfol.Playground",
                "Jfol Playground",
                new[] { "Jfol", "TypeScript", "Angular" }
            ));
            Cards.Add(new Repository(
                "Jfol.Test",
                "https://github.com/MeilCli/Jfol.Test",
                "Jfol test data for any implementation",
                new[] { "Jfol" }
            ));
            Cards.Add(new Repository(
                "setup-crystal-action",
                "https://github.com/MeilCli/setup-crystal-action",
                "JavaScript based setup Crystal action for GitHub Actions.",
                new[] { "GitHub Actions", "Crystal" }
            ));
            Cards.Add(new Repository(
                "test-command-action",
                "https://github.com/MeilCli/test-command-action",
                "JavaScript based testing command action for GitHub Actions.",
                new[] { "GitHub Actions" }
            ));
            Cards.Add(new Repository(
                "carthage-update-check-action",
                "https://github.com/MeilCli/carthage-update-check-action",
                "JavaScript based Carthage new package version check action for GitHub Actions.",
                new[] { "GitHub Actions", "Carthage", "update-check-action" }
            ));
            Cards.Add(new Repository(
                "swiftpm-update-check-action",
                "https://github.com/MeilCli/swiftpm-update-check-action",
                "JavaScript based SwiftPM new package version check action for GitHub Actions.",
                new[] { "GitHub Actions", "SwiftPM", "update-check-action" }
            ));
            Cards.Add(new Repository(
                "cocoapods-update-check-action",
                "https://github.com/MeilCli/cocoapods-update-check-action",
                "JavaScript based CocoaPods new package version check action for GitHub Actions.",
                new[] { "GitHub Actions", "CocoaPods", "update-check-action" }
            ));
            Cards.Add(new Repository(
                "gradle-update-check-action",
                "https://github.com/MeilCli/gradle-update-check-action",
                "JavaScript based gradle maven new package version check action for GitHub Actions.",
                new[] { "GitHub Actions", "Gradle", "update-check-action" }
            ));
            Cards.Add(new Repository(
                "nuget-update-check-action",
                "https://github.com/MeilCli/nuget-update-check-action",
                "JavaScript based nuget new package version check action for GitHub Actions.",
                new[] { "GitHub Actions", "NuGet", "update-check-action" }
            ));
            Cards.Add(new Repository(
                "npm-update-check-action",
                "https://github.com/MeilCli/npm-update-check-action",
                "JavaScript based npm new package version check action for GitHub Actions.",
                new[] { "GitHub Actions", "npm", "update-check-action" }
            ));
            Cards.Add(new Repository(
               "danger-action",
               "https://github.com/MeilCli/danger-action",
               "JavaScript based running danger action for GitHub Actions.",
               new[] { "GitHub Actions", "Danger" }
            ));
            Cards.Add(new Repository(
               "SharedProperty",
               "https://github.com/MeilCli/SharedProperty",
               "Application setting library for .NET Standard 2.0",
               new[] { ".NET Standard", "C#" }
            ));
            Cards.Add(new Repository(
               "DetectionCore",
               "https://github.com/MeilCli/DetectionCore",
               "A browser detect library for .NET Standard",
               new[] { ".NET Standard", "C#" }
            ));

            Cards = Cards.OrderBy(x => x.Title).ToList();
            Tags = Cards.SelectMany(x => x.Tags).Distinct().ToList();
        }
    }
}
