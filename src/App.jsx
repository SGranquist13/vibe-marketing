import React, { useState, useEffect } from 'react';
import { Terminal, Zap, Sparkles, Code2, ArrowRight, Github, Twitter, Smartphone, Lock, Bell, Cloud, Mic, FileCode, Rocket, Server, Network, Cpu, Brain } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import ClaudeLogoColor from './assets/claude-color.svg';
import GeminiLogoColor from './assets/gemini-color.svg';
import GithubCopilotLogo from './assets/githubcopilot.svg';
import GrokLogo from './assets/grok.svg';
import GroqLogo from './assets/groq.svg';
import MetaLogoColor from './assets/meta-color.svg';
import MistralLogoColor from './assets/mistral-color.svg';
import OlamaLogo from './assets/ollama.svg';
import OpenAILogo from './assets/openai.svg';
import OpenRouterLogo from './assets/openrouter.svg';
import QwenLogoColor from './assets/qwen-color.svg';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      {/* Background Ambience */}
      <div className="bg-ambience">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      {/* Header */}
      <header className="app-header glass">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-icon">
              <Code2 size={18} className="icon-white" />
            </div>
            <span className="logo-text">Vibe-on-the-Go</span>
          </div>

          <nav className="main-nav">
            <a href="#features">Features</a>
            <a href="#coming-soon">Coming Soon</a>
            <a href="https://github.com/SGranquist13/votg" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>

          <div className="header-actions">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <a href="https://github.com/SGranquist13/votg" target="_blank" rel="noopener noreferrer" className="btn-text">Main Repo</a>
            <a href="https://github.com/SGranquist13/votg" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">

          {/* Hero Section */}
          <section className="hero animate-fade-in">
            <a href="https://github.com/SGranquist13/votg" target="_blank" rel="noopener noreferrer" className="badge">
              <span className="status-dot"></span>
              <span className="badge-text">View alpha on GitHub</span>
            </a>

            <h1 className="hero-title">
              Your AI Coding Agent, <br />
              <span className="text-gradient">On The Go.</span>
            </h1>

            <p className="hero-subtitle">
              Control and monitor your AI Coding Agent on the go. Use Claude Code or any AI provider through Claude Code Router.
            </p>

            <div className="hero-actions">
              <a href="https://github.com/SGranquist13/votg" target="_blank" rel="noopener noreferrer" className="btn-large btn-primary-large group">
                View Main Repo
                <ArrowRight size={18} className="arrow-icon" />
              </a>
              <a href="https://github.com/SGranquist13/votg" target="_blank" rel="noopener noreferrer" className="btn-large btn-secondary-large">
                View Documentation
              </a>
            </div>

            {/* Hero Visual - Terminal, Mobile & Cloud */}
            <div className="hero-visual-container">
              <div className="hero-visual-row">
              {/* Terminal Window */}
              <div className="terminal-window glass-card">
                <div className="terminal-header">
                  <div className="window-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                  <span className="terminal-title">vibe-agent — ~/projects/future</span>
                </div>

                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="prompt-arrow">➜</span>
                    <span className="prompt-path">~</span>
                    <span className="cmd">vibe</span>
                  </div>
                  <div className="terminal-output">📱 Session created: cmjem8sg8000eu5g84n44u6tr</div>
                  <div className="terminal-output"></div>
                  <div className="terminal-output">Check your mobile app - the session should appear shortly.</div>
                  <div className="terminal-output"></div>
                  <div className="terminal-output"><span className="success">✓ Claude Code Router: Enabled and running</span></div>
                  <div className="terminal-output"></div>
                  <div className="terminal-output">📝 Session: cmjem8sg8000eu5g84n44u6tr</div>
                  <div className="terminal-output">Logs: C:\Users\steven\.vibe\logs\2025-12-20-12-12-42-pid-20384.log</div>
                  <div className="terminal-output"></div>
                  <div className="terminal-output"> - Claude Code v2.0.24</div>
                  <div className="terminal-output"> - - Opus 4.1 · API Usage Billing</div>
                  <div className="terminal-output"> - C:\Users\steven\Desktop\votg\cli</div>
                  <div className="terminal-output"></div>
                  <div className="terminal-output">────────────────────────────────────────</div>
                  <div className="terminal-output">&gt; Try "how do I log an error?"</div>
                  <div className="terminal-output">────────────────────────────────────────</div>
                  <div className="terminal-output">  ? for shortcuts</div>
                </div>
              </div>

              {/* iPhone Mockup */}
              <div className="iphone-mockup glass-card">
                <div className="iphone-frame">
                  <div className="iphone-notch"></div>
                  <div className="iphone-screen">
                    <div className="mobile-header">
                      <div className="mobile-title">NPM Package Version Checker Web App</div>
                    </div>
                    <div className="mobile-content">
                      <div className="mobile-message user-message">
                        Create me a web application for viewing up-to-date NPM package versions for my uploaded package.json file.
                      </div>
                      <div className="mobile-message assistant-message">
                        I'll help you create a web application for viewing up-to-date NPM package versions from an uploaded package.json file. Let me plan this implementation:
                      </div>
                      <div className="mobile-todo">
                        <div className="mobile-todo-icon">💡</div>
                        <div className="mobile-todo-text">Create a web application using Node.js/Express...</div>
                      </div>
                      <div className="mobile-permission">
                        <div className="mobile-permission-command">mkdir npm-version-checker && cd npm-version-checker</div>
                        <button className="mobile-permission-btn">Yes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section id="features" className="features-grid">
            <FeatureCard
              icon={<Smartphone size={24} />}
              title="Mobile Access"
              description="Control your agents from anywhere—iOS, Android, or Web."
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Instant Device Switching"
              description="Switch between terminal and mobile in one tap."
            />
            <FeatureCard
              icon={<Lock size={24} />}
              title="End-to-End Encryption"
              description="Your code stays private. Zero-knowledge architecture."
            />
            <FeatureCard
              icon={<Bell size={24} />}
              title="Push Notifications"
              description="Get alerts when your agent needs you."
            />
            <FeatureCard
              icon={<Cloud size={24} />}
              title="Self-Hosted Option"
              description="Run your own server. Open source and customizable."
            />
            <FeatureCard
              icon={<Mic size={24} />}
              title="Voice Assistant"
              description="Talk to your AI in 15+ languages."
            />
            <FeatureCard
              icon={<FileCode size={24} />}
              title="File Manager"
              description="Browse and edit files with syntax highlighting."
            />
          </section>

          {/* Coming Soon Section */}
          <section id="coming-soon" className="coming-soon-section">
            <h2 className="section-title">Coming Soon</h2>
            
            {/* Cloud Sessions Graphic */}
            <div className="cloud-sessions-graphic">
              <div className="graphic-header">
                <h3 className="graphic-title">Cloud Sessions</h3>
                <p className="graphic-subtitle">Run your AI agents anywhere: Terminal, Mobile, or Cloud</p>
              </div>
              
              <div className="devices-grid">
                {/* Terminal Device */}
                <div className="device-card glass-card">
                  <div className="device-icon-wrapper">
                    <div className="device-icon terminal-icon">
                      <div className="terminal-window-icon">
                        <div className="terminal-window-frame">
                          <div className="terminal-window-header">
                            <div className="terminal-dot"></div>
                            <div className="terminal-dot"></div>
                            <div className="terminal-dot"></div>
                          </div>
                          <div className="terminal-window-content">
                            <div className="terminal-line-icon">➜</div>
                            <div className="terminal-line-icon">➜</div>
                            <div className="terminal-line-icon">➜</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="device-label">Terminal</h4>
                  <p className="device-description">Run agents locally on your machine with full terminal access</p>
                  <div className="device-status available">Available</div>
                </div>
                
                {/* Mobile Device */}
                <div className="device-card glass-card">
                  <div className="device-icon-wrapper">
                    <div className="device-icon mobile-icon">
                      <div className="mobile-window-icon">
                        <div className="mobile-window-frame">
                          <div className="mobile-window-header"></div>
                          <div className="mobile-window-content">
                            <div className="mobile-message-bubble"></div>
                            <div className="mobile-message-bubble"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="device-label">Mobile</h4>
                  <p className="device-description">Monitor and control agents from iOS, Android, or Web</p>
                  <div className="device-status available">Available</div>
                </div>
                
                {/* Cloud Device */}
                <div className="device-card glass-card coming-soon-card">
                  <div className="device-icon-wrapper">
                    <div className="device-icon cloud-icon">
                      <div className="cloud-window-icon">
                        <div className="cloud-window-frame">
                          <div className="cloud-window-header">
                            <div className="cloud-dot"></div>
                            <div className="cloud-dot"></div>
                            <div className="cloud-dot"></div>
                          </div>
                          <div className="cloud-window-content">
                            <div className="cloud-server-icon">
                              <Server size={20} />
                            </div>
                            <div className="cloud-lines">
                              <div className="cloud-line"></div>
                              <div className="cloud-line"></div>
                              <div className="cloud-line"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="device-label">Cloud</h4>
                  <p className="device-description">Run agents in secure, isolated Vibe Cloud sandboxes</p>
                  <div className="device-status coming-soon">Coming Soon</div>
                </div>
              </div>
            </div>

            <div className="coming-soon-grid coming-soon-featured">
              <div className="coming-soon-card glass-card featured-card">
                <div className="coming-soon-icon">
                  <Rocket size={32} />
                </div>
                <h3 className="coming-soon-title">Vibe Cloud</h3>
                <p className="coming-soon-description">
                  Run your AI agents in secure, managed cloud environments. Vibe Cloud gives you the power of Claude Code with automatic scaling, persistent sessions, and zero infrastructure overhead.
                </p>
                <div className="cloud-features">
                  <div className="cloud-feature-item">
                    <span className="feature-dot">•</span>
                    <span>Serverless agent execution</span>
                  </div>
                  <div className="cloud-feature-item">
                    <span className="feature-dot">•</span>
                    <span>Persistent session management</span>
                  </div>
                  <div className="cloud-feature-item">
                    <span className="feature-dot">•</span>
                    <span>Auto-scaling & monitoring</span>
                  </div>
                  <div className="cloud-feature-item">
                    <span className="feature-dot">•</span>
                    <span>Enterprise-grade security</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Supported Providers Section */}
          <section className="providers-section">
            <div className="providers-content">
              <h2 className="section-title">Supported Providers</h2>
              <p className="section-subtitle">Connect to your favorite AI provider through Claude Code Router</p>

              <div className="providers-grid">
                <ProviderCard logo={ClaudeLogoColor} name="Claude" provider="Anthropic" native={true} />
                <ProviderCard logo={GeminiLogoColor} name="Gemini" provider="Default CCR Support" native={false} />
                <ProviderCard logo={OlamaLogo} name="Ollama" provider="Default CCR Support" native={false} />
                <ProviderCard logo={OpenAILogo} name="OpenAI" provider="Via OpenRouter" native={false} />
                <ProviderCard logo={MetaLogoColor} name="Meta" provider="Via OpenRouter" native={false} />
                <ProviderCard logo={MistralLogoColor} name="Mistral" provider="Via OpenRouter" native={false} />
                <ProviderCard logo={QwenLogoColor} name="Qwen" provider="Via OpenRouter" native={false} />
                <ProviderCard logo={GroqLogo} name="Groq" provider="Via OpenRouter" native={false} />
                <ProviderCard logo={GrokLogo} name="Grok" provider="Via OpenRouter" native={false} />
                <ProviderCard logo={GithubCopilotLogo} name="GitHub Copilot" provider="Via OpenRouter" native={false} />
                <ProviderCard logo={OpenRouterLogo} name="OpenRouter" provider="Via OpenRouter" native={false} />
              </div>

              <div className="providers-info">
                <p className="providers-info-text">
                  <strong>Claude:</strong> Native support with full feature parity.
                </p>
                <p className="providers-info-text">
                  <strong>Gemini & Ollama:</strong> Built-in CCR support.
                </p>
                <p className="providers-info-text">
                  <strong>Other Providers:</strong> Available via OpenRouter integration. Add your OpenRouter API key to access 100+ models from OpenAI, Meta, Mistral, Groq, and more.
                </p>
              </div>
            </div>
          </section>

          {/* Social Proof / Trust */}
          <section className="social-proof">
            <p className="proof-label">Built with modern technology</p>
            <div className="logos-container">
              <span className="logo-placeholder">REACT NATIVE</span>
              <span className="logo-placeholder">NODE.JS</span>
              <span className="logo-placeholder">FASTIFY</span>
              <span className="logo-placeholder">POSTGRESQL</span>
              <span className="logo-placeholder">REDIS</span>
              <span className="logo-placeholder">TYPESCRIPT</span>
              <span className="logo-placeholder">SOCKET.IO</span>
              <span className="logo-placeholder">CCR</span>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Code2 size={16} className="footer-icon" />
            <span>© 2024 Vibe-on-the-Go</span>
          </div>
          <div className="footer-links">
            <a href="https://github.com/SGranquist13/votg" target="_blank" rel="noopener noreferrer">Main Repo</a>
            <a href="https://github.com/SGranquist13/vibe-cli" target="_blank" rel="noopener noreferrer">CLI</a>
            <a href="https://github.com/SGranquist13/vibe-mobile" target="_blank" rel="noopener noreferrer">Mobile</a>
            <a href="https://github.com/SGranquist13/vibe-server" target="_blank" rel="noopener noreferrer">Server</a>
            <a href="https://github.com/SGranquist13/vibe-gateway" target="_blank" rel="noopener noreferrer">Gateway</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com/SGranquist13/votg" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="glass-card feature-card">
      <div className="feature-icon">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">
        {description}
      </p>
    </div>
  );
}

function ProviderCard({ logo, name, provider, native }) {
  return (
    <div className="glass-card provider-card">
      <div className="provider-logo-wrapper">
        <img src={logo} alt={name} className="provider-logo" />
      </div>
      <h3 className="provider-name">{name}</h3>
      <p className="provider-label">{provider}</p>
      {native && <div className="provider-badge native">Native Support</div>}
    </div>
  );
}

export default App;
