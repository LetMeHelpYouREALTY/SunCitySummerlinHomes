
import { useEffect, useState } from 'react';
import styles from '../styles/DevDashboard.module.css';

interface SystemInfo {
  memory: {
    total: number;
    free: number;
    used: number;
  };
  cpu: {
    usage: number;
  };
  uptime: number;
  nextVersion: string;
  nodeVersion: string;
}

interface BuildInfo {
  lastBuild: string;
  buildDuration: number;
  totalPages: number;
}

export function DevDashboard() {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [buildInfo, setBuildInfo] = useState<BuildInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSystemInfo = async () => {
      try {
        const response = await fetch('/api/system-info');
        if (!response.ok) {
          throw new Error(`Error fetching system info: ${response.status}`);
        }
        const data = (await response.json()) as SystemInfo;
        setSystemInfo(data);
        setBuildInfo({
          lastBuild: new Date().toISOString(),
          buildDuration: 8.2,
          totalPages: 12,
        });
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Error fetching system information';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchSystemInfo();
    const interval = setInterval(() => void fetchSystemInfo(), 10000);
    return () => clearInterval(interval);
  }, []);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = Math.floor(seconds % 60);
    return `${days}d ${hours}h ${minutes}m ${sec}s`;
  };

  if (isLoading) {
    return (
      <div className={styles.dashboard}>
        <p>Loading system information...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.dashboard}>
        <p className={styles.error}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <h2>Developer Dashboard</h2>

      <div className={styles.section}>
        <h3>System Resources</h3>
        {systemInfo && (
          <div className={styles.grid}>
            <div className={styles.card}>
              <h4>Memory Usage</h4>
              <div className={styles.meter}>
                <div
                  className={styles.progress}
                  style={{ width: `${(systemInfo.memory.used / systemInfo.memory.total) * 100}%` }}
                />
              </div>
              <p>
                {formatBytes(systemInfo.memory.used)} / {formatBytes(systemInfo.memory.total)}
              </p>
            </div>

            <div className={styles.card}>
              <h4>CPU Usage</h4>
              <div className={styles.meter}>
                <div className={styles.progress} style={{ width: `${systemInfo.cpu.usage}%` }} />
              </div>
              <p>{systemInfo.cpu.usage.toFixed(1)}%</p>
            </div>

            <div className={styles.card}>
              <h4>Uptime</h4>
              <p>{formatUptime(systemInfo.uptime)}</p>
            </div>

            <div className={styles.card}>
              <h4>Versions</h4>
              <p>Next.js: {systemInfo.nextVersion || 'Unknown'}</p>
              <p>Node.js: {systemInfo.nodeVersion || 'Unknown'}</p>
            </div>
          </div>
        )}
      </div>

      {buildInfo && (
        <div className={styles.section}>
          <h3>Build Information</h3>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h4>Last Build</h4>
              <p>{new Date(buildInfo.lastBuild).toLocaleString()}</p>
              <p>Duration: {buildInfo.buildDuration}s</p>
            </div>

            <div className={styles.card}>
              <h4>Pages Generated</h4>
              <p>{buildInfo.totalPages} pages</p>
            </div>
          </div>
        </div>
      )}

      <div className={styles.section}>
        <h3>Quick Actions</h3>
        <div className={styles.buttonGrid}>
          <button className={styles.button} type="button" onClick={() => alert('Clearing cache...')}>
            Clear Cache
          </button>
          <button className={styles.button} type="button" onClick={() => alert('Running tests...')}>
            Run Tests
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={() => alert('Generating sitemap...')}
          >
            Generate Sitemap
          </button>
          <button className={styles.button} type="button" onClick={() => alert('Running lint...')}>
            Lint Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default DevDashboard;
