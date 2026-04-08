import { useEffect, useState } from "react";
import { ExternalLink, Star, GitFork } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Python: "#3572A5",
};

const TABS = ["all", "config", "github-config"] as const;

const ProjectsSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    fetch("https://api.github.com/users/Nithinreddy3093/repos?sort=updated&per_page=100")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredRepos = activeTab === "all"
    ? repos
    : repos.filter((r) => r.topics?.includes(activeTab));

  return (
    <section id="projects" className="py-24 px-6 md:px-[120px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-center text-foreground mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Explore my latest work and open-source contributions from GitHub.
        </p>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeTab === tab
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/70 border-border hover:border-foreground/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 animate-pulse h-48" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground text-lg">⑂</span>
                      <h3 className="text-foreground font-medium text-base truncate max-w-[200px]">
                        {repo.name}
                      </h3>
                    </div>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {repo.description || "No description available"}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || "#888" }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star size={14} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <GitFork size={14} /> {repo.forks_count}
                    </span>
                  </div>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
