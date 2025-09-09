import dotenv from 'dotenv';

dotenv.config({ path: './config.env', quiet: true });
import app from './app.js';

// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
