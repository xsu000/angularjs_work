import './index.css';
import { InitApp } from '../common/app';
import { generateLangs } from '../common/i18n';
import enUS from './languages/en-US.json';
import zhCN from './languages/zh-CN.json';
import login from './login';

const dependencies = [login.name];

const app = InitApp(generateLangs(enUS, zhCN), dependencies, login.page);

export default app;