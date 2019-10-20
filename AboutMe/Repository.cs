namespace AboutMe
{
    public class Repository
    {
        public string Title { get; }

        public string Url { get; }

        public string Description { get; }

        public string[] Tags { get; }

        public Repository(string title, string url, string description, string[] tags)
        {
            Title = title;
            Url = url;
            Description = description;
            Tags = tags;
        }
    }
}
