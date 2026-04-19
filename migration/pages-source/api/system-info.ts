
import type { NextApiRequest, NextApiResponse } from 'next';
import os from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

type SystemInfo = {
  uptime: number;
  memoryUsage: {
    total: number;
    free: number;
    used: number;
  };
  cpuUsage: number;
  nodeVersion: string;
  nextVersion: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SystemInfo>
) {
  try {
    // Get memory information
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    
    // Get CPU usage (simplified)
    const cpuUsage = os.loadavg()[0] * 10; // Multiply by 10 to get percentage-like value
    
    // Get Node.js version
    const nodeVersion = process.version;
    
    // Get Next.js version from package.json
    let nextVersion = 'Unknown';
    try {
      const { stdout } = await execAsync('npm list next --json');
      const packageInfo = JSON.parse(stdout);
      nextVersion = packageInfo.dependencies.next.version;
    } catch (e) {
      console.error('Error getting Next.js version:', e);
    }
    
    res.status(200).json({
      uptime: os.uptime(),
      memoryUsage: {
        total: totalMem,
        free: freeMem,
        used: usedMem
      },
      cpuUsage,
      nodeVersion,
      nextVersion
    });
  } catch (error) {
    console.error('Error in system-info API:', error);
    res.status(500).json({
      uptime: 0,
      memoryUsage: { total: 0, free: 0, used: 0 },
      cpuUsage: 0,
      nodeVersion: 'Error',
      nextVersion: 'Error'
    });
  }
}
