import { NextResponse } from 'next/server';
import os from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
  try {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const cpuUsage = os.loadavg()[0] * 10;
    const nodeVersion = process.version;
    let nextVersion = 'Unknown';
    try {
      const { stdout } = await execAsync('npm list next --json');
      const packageInfo = JSON.parse(stdout);
      nextVersion = packageInfo.dependencies?.next?.version ?? 'Unknown';
    } catch {
      nextVersion = 'Unknown';
    }

    return NextResponse.json({
      uptime: os.uptime(),
      memoryUsage: { total: totalMem, free: freeMem, used: usedMem },
      cpuUsage,
      nodeVersion,
      nextVersion,
    });
  } catch {
    return NextResponse.json(
      {
        uptime: 0,
        memoryUsage: { total: 0, free: 0, used: 0 },
        cpuUsage: 0,
        nodeVersion: 'Error',
        nextVersion: 'Error',
      },
      { status: 500 },
    );
  }
}
