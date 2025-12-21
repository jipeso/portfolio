import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import PythonOriginal from 'devicons-react/icons/PythonOriginal';
import FlaskOriginal from 'devicons-react/icons/FlaskOriginal';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal';
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal';
import ExpressOriginal from 'devicons-react/icons/ExpressOriginal';
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal';
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal';
import RedisOriginal from 'devicons-react/icons/RedisOriginal';
import DockerOriginal from 'devicons-react/icons/DockerOriginal';
import GithubOriginal from 'devicons-react/icons/GithubOriginal';
import GitOriginal from 'devicons-react/icons/GitOriginal';
import Html5Original from 'devicons-react/icons/Html5Original';
import Css3Original from 'devicons-react/icons/Css3Original';
import UbuntuOriginal from 'devicons-react/icons/UbuntuOriginal';
import GraphqlPlain from 'devicons-react/icons/GraphqlPlain';
import KubernetesOriginal from 'devicons-react/icons/KubernetesOriginal';
import ReduxOriginal from 'devicons-react/icons/ReduxOriginal';
import VitejsOriginal from 'devicons-react/icons/VitejsOriginal';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import GithubactionsOriginal from 'devicons-react/icons/GithubactionsOriginal';

import type { Skill, Category } from '../types';

export const categories: Category[] = [
  'Programming Languages',
  'Frontend development',
  'Backend development',
  'Databases',
  'Other Tools',
];

export const skillData: Skill[] = [
  {
    name: 'Python',
    category: 'Programming Languages',
    IconComponent: PythonOriginal,
  },
  {
    name: 'Flask',
    category: 'Backend development',
    IconComponent: FlaskOriginal,
  },
  {
    name: 'JavaScript',
    category: 'Programming Languages',
    IconComponent: JavascriptOriginal,
  },
  {
    name: 'TypeScript',
    category: 'Programming Languages',
    IconComponent: TypescriptOriginal,
  },
  {
    name: 'React',
    category: 'Frontend development',
    IconComponent: ReactOriginal,
  },
  {
    name: 'Express',
    category: 'Backend development',
    IconComponent: ExpressOriginal,
  },
  {
    name: 'Node.js',
    category: 'Backend development',
    IconComponent: NodejsOriginal,
  },
  { name: 'MongoDB', category: 'Databases', IconComponent: MongodbOriginal },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    IconComponent: PostgresqlOriginal,
  },
  { name: 'Redis ', category: 'Databases', IconComponent: RedisOriginal },
  { name: 'Docker', category: 'Other Tools', IconComponent: DockerOriginal },
  {
    name: 'Kubernetes',
    category: 'Other Tools',
    IconComponent: KubernetesOriginal,
  },
  { name: 'GitHub', category: 'Other Tools', IconComponent: GithubOriginal },
  { name: 'Git', category: 'Other Tools', IconComponent: GitOriginal },
  {
    name: 'HTML',
    category: 'Frontend development',
    IconComponent: Html5Original,
  },
  {
    name: 'CSS',
    category: 'Frontend development',
    IconComponent: Css3Original,
  },
  { name: 'Ubuntu', category: 'Other Tools', IconComponent: UbuntuOriginal },
  {
    name: 'GraphQL',
    category: 'Backend development',
    IconComponent: GraphqlPlain,
  },
  {
    name: 'Redux',
    category: 'Frontend development',
    IconComponent: ReduxOriginal,
  },
  {
    name: 'Vite',
    category: 'Frontend development',
    IconComponent: VitejsOriginal,
  },
  {
    name: 'Tailwind',
    category: 'Frontend development',
    IconComponent: TailwindcssOriginal,
  },
  {
    name: 'GitHub Actions',
    category: 'Other Tools',
    IconComponent: GithubactionsOriginal,
  },
];
