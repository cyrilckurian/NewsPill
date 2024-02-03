export default function Home() {
  return (
    <>
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <main role="main" className="inner cover">
          <h1 className="cover-heading">NewsPill.</h1>
          <p className="lead">
            NewsPill emerged in response to the ever-growing volume of digital
            news content available online and the challenges associated with
            efficiently accessing and comprehending this information. With the
            proliferation of news sources, users often find themselves
            overwhelmed by the sheer quantity of articles available. To address
            this issue, the project leverages artificial intelligence, including
            natural language processing and machine learning, to automatically
            discover news articles from diverse sources and provide users with
            succinct and informative summaries of the key points. By simplifying
            the process of news consumption, enhancing personalization, and
            reducing information overload, this project aims to empower users to
            stay well-informed about current events while saving time and effort
            in their daily news reading routines.
          </p>
        </main>

        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>Home Page of NewsPill </p>
          </div>
        </footer>
      </div>
    </>
  );
}
