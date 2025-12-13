import React, { useState, useEffect } from 'react';
import { Terminal, Zap, Sparkles, Code2, ArrowRight, Github, Twitter, Smartphone, Lock, Bell, Cloud, Mic, FileCode, Rocket, Server, Layers, Users, Globe, CheckCircle } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';

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
              Monitor and control Claude Code from anywhere. Powered by Vibe AI Gateway integration, your app connects to any AI provider through a unified interface. End-to-end encrypted, self-hosted, and open source.
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
                    <span className="cmd">vibe auth login</span>
                  </div>
                  <div className="terminal-output">Authenticating... <span className="success">Success</span></div>
                  <div className="terminal-line">
                    <span className="prompt-arrow">➜</span>
                    <span className="prompt-path">~</span>
                    <span className="cmd">vibe claude</span>
                  </div>
                  <div className="terminal-output">Starting Claude Code session...</div>
                  <div className="terminal-output">Connected to mobile app</div>
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

              {/* Cloud Session - Coming Soon */}
              <div className="cloud-session-hero glass-card coming-soon-hero">
                <div className="cloud-session-header">
                  <div className="cloud-session-dots">
                    <div className="cloud-dot-small"></div>
                    <div className="cloud-dot-small"></div>
                    <div className="cloud-dot-small"></div>
                  </div>
                  <span className="cloud-session-title">Vibe Cloud</span>
                </div>
                <div className="cloud-session-body">
                  <div className="cloud-session-icon-wrapper">
                    <Server size={24} />
                  </div>
                  <div className="cloud-session-lines">
                    <div className="cloud-session-line"></div>
                    <div className="cloud-session-line"></div>
                    <div className="cloud-session-line"></div>
                  </div>
                  <div className="cloud-session-status">
                    <span className="cloud-coming-soon-badge">Coming Soon</span>
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
              description="Monitor AI agents from anywhere on iOS, Android, or Web. Seamless session management across all your devices."
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Instant Device Switching"
              description="Take control with one tap. Switch between local terminal and remote mobile control instantly."
            />
            <FeatureCard
              icon={<Lock size={24} />}
              title="End-to-End Encryption"
              description="Zero-knowledge architecture ensures your code stays private. The server cannot decrypt your data."
            />
            <FeatureCard
              icon={<Bell size={24} />}
              title="Push Notifications"
              description="Get alerts when your agent needs input, requests permissions, or encounters errors. Never miss a beat."
            />
            <FeatureCard
              icon={<Cloud size={24} />}
              title="Self-Hosted Option"
              description="Run your own server for complete control. Open source and fully customizable."
            />
            <FeatureCard
              icon={<Mic size={24} />}
              title="Voice Assistant"
              description="Talk to your AI in 15+ languages. Natural voice interaction for hands-free coding."
            />
            <FeatureCard
              icon={<Github size={24} />}
              title="GitHub Integration"
              description="Connect your GitHub profile for enhanced context and seamless workflow integration."
            />
            <FeatureCard
              icon={<FileCode size={24} />}
              title="File Manager"
              description="Browse and edit files with syntax highlighting. Full file system access from your mobile device."
            />
          </section>

          {/* How It Works Section */}
          <section className="how-it-works-section">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Seamless integration from your app to any AI provider
            </p>

            <div className="architecture-flow">
              <div className="flow-step glass-card">
                <div className="flow-number">1</div>
                <div className="flow-icon">
                  <Smartphone size={32} />
                </div>
                <h3 className="flow-title">Your App</h3>
                <p className="flow-description">
                  Start with Vibe-on-the-Go mobile or web interface
                </p>
              </div>

              <div className="flow-arrow">
                <ArrowRight size={24} />
              </div>

              <div className="flow-step glass-card">
                <div className="flow-number">2</div>
                <div className="flow-icon">
                  <Terminal size={32} />
                </div>
                <h3 className="flow-title">Claude Code</h3>
                <p className="flow-description">
                  Connects to Claude Code agent for intelligent task execution
                </p>
              </div>

              <div className="flow-arrow">
                <ArrowRight size={24} />
              </div>

              <div className="flow-step glass-card">
                <div className="flow-number">3</div>
                <div className="flow-icon">
                  <Layers size={32} />
                </div>
                <h3 className="flow-title">Vibe AI Gateway</h3>
                <p className="flow-description">
                  Routes requests through unified gateway integration
                </p>
              </div>

              <div className="flow-arrow">
                <ArrowRight size={24} />
              </div>

              <div className="flow-step glass-card">
                <div className="flow-number">4</div>
                <div className="flow-icon">
                  <Globe size={32} />
                </div>
                <h3 className="flow-title">Any Provider</h3>
                <p className="flow-description">
                  Connect to OpenAI, Anthropic, Google, or any AI provider
                </p>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="use-cases-section">
            <h2 className="section-title">Perfect For</h2>
            <p className="section-subtitle">
              Whether you're coding on the go or managing remote development
            </p>

            <div className="use-cases-grid">
              <div className="use-case-card glass-card">
                <div className="use-case-icon">
                  <Smartphone size={28} />
                </div>
                <h3 className="use-case-title">Mobile Developers</h3>
                <p className="use-case-description">
                  Monitor and control your AI coding agents from your phone or tablet. Perfect for reviewing progress during commutes or away from your desk.
                </p>
                <ul className="use-case-features">
                  <li><CheckCircle size={16} /> Real-time session monitoring</li>
                  <li><CheckCircle size={16} /> Approve permissions on the go</li>
                  <li><CheckCircle size={16} /> Voice commands for hands-free control</li>
                </ul>
              </div>

              <div className="use-case-card glass-card">
                <div className="use-case-icon">
                  <Users size={28} />
                </div>
                <h3 className="use-case-title">Distributed Teams</h3>
                <p className="use-case-description">
                  Keep your team in sync with shared AI agent sessions. Monitor progress, collaborate on tasks, and maintain visibility across time zones.
                </p>
                <ul className="use-case-features">
                  <li><CheckCircle size={16} /> Multi-device access</li>
                  <li><CheckCircle size={16} /> Instant notifications</li>
                  <li><CheckCircle size={16} /> End-to-end encryption</li>
                </ul>
              </div>

              <div className="use-case-card glass-card">
                <div className="use-case-icon">
                  <Rocket size={28} />
                </div>
                <h3 className="use-case-title">Rapid Prototyping</h3>
                <p className="use-case-description">
                  Build and iterate quickly with AI assistance anywhere. Start tasks from your mobile device and seamlessly transition to your desktop when ready.
                </p>
                <ul className="use-case-features">
                  <li><CheckCircle size={16} /> Quick task initiation</li>
                  <li><CheckCircle size={16} /> Seamless device switching</li>
                  <li><CheckCircle size={16} /> File browsing and editing</li>
                </ul>
              </div>
            </div>
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

            <div className="coming-soon-grid">
              <div className="coming-soon-card glass-card">
                <div className="coming-soon-icon">
                  <Rocket size={24} />
                </div>
                <h3 className="coming-soon-title">Vibe Cloud</h3>
                <p className="coming-soon-description">
                  Run your AI agents in secure cloud sandboxes with Vibe Cloud integration. Isolated environments for safe code execution.
                </p>
              </div>
              <div className="coming-soon-card glass-card">
                <div className="coming-soon-icon">
                  <Zap size={24} />
                </div>
                <h3 className="coming-soon-title">Vibe AI Gateway</h3>
                <p className="coming-soon-description">
                  Unified interface to any AI provider. Claude Code connects through the Vibe AI Gateway, giving you flexibility to use OpenAI, Anthropic, Google, or any other provider seamlessly.
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

export default App;
