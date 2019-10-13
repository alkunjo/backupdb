const schedule = require("node-schedule");
const { execSync } = require('child_process');
schedule.scheduleJob("0 0 7 * * *", async () => {
  const now = new Date();
  const hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();
  const d = now.getDate();
  const m = now.getMonth() + 1;
  const y = now.getFullYear();
  const allargv = process.argv.slice(2)
  const container = allargv[0];
  const dbname = allargv[1];
  const destination = allargv[2];
  const temppath = `/tmp/${dbname}_${y}${m}${d}_${hh}_${mm}_${ss}.sql`
  console.log(`execute ${d}-${m}-${y} for ${container} with database ${dbname} at ${y}${m}${d}_${hh}:${mm}:${ss}`);
  await execSync(`docker exec ${container} pg_dump -U postgres -d ${dbname} -f ${temppath}`)
  await execSync(`docker cp ${container}:${temppath} ${destination}`)
  await execSync(`docker exec ${container} rm ${temppath}`)
});
