// import htmlIcon from '../images/skills/html5.svg';
// import reactIcon from '../images/skills/react.svg';
// import gihubIcon from '../images/skills/github.svg';
// import dockerIcon from '../images/skills/docker.svg';
// import bootstrapIcon from '../images/skills/bootstrap.svg';
// import codepenIcon from '../images/skills/codepen.svg';
// import codekitIcon from '../images/skills/codekit.svg';
// import cssIcon from '../images/skills/css.svg';
// import gitlabIcon from '../images/skills/gitlab.svg';
// import javascriptIcon from '../images/skills/javascript.svg';
// import railsIcon from '../images/skills/rails.svg';
// import terminalIcon from '../images/skills/terminal.svg';
// import rubyIcon from '../images/skills/ruby.svg';
// import tailwindIcon from '../images/skills/tailwind.svg';
// import databaseIcon from '../images/skills/database.svg';

import { RiReactjsFill, RiCss3Line } from 'react-icons/ri';
import { BsServer, BsTerminal, BsBootstrap } from 'react-icons/bs';
import { ImHtmlFive2 } from 'react-icons/im';
import { SiTailwindcss, SiRubyonrails, SiSelenium } from 'react-icons/si';
import { TbBrandDocker, TbBrandJavascript, TbBrandGithub } from 'react-icons/tb';
import { DiRubyRough } from 'react-icons/di';
import { GiCapybara } from 'react-icons/gi';
import { BiCode } from 'react-icons/bi';
import { FiCodepen, FiGitlab } from 'react-icons/fi';

const skills_list = () => (
  {
    languages: [
      {
        name: 'RUBY',
        icon: (style) => DiRubyRough(style = { style }),
      },
      {
        name: 'CSS',
        icon: (style) => RiCss3Line(style = { style }),
      },
      {
        name: 'JAVSCRIPT',
        icon: (style) => TbBrandJavascript(style = { style }),
      },
      {
        name: 'HTML',
        icon: (style) => ImHtmlFive2(style = { style }),
      },
      {
        name: 'MYSQL',
        icon: (style) => BsServer(style = { style }),
      },
    ],
    libraries: [
      {
        name: 'React',
        icon: (style) => RiReactjsFill(style = { style }),
      },
      {
        name: 'Ruby on Rails',
        icon: (style) => SiRubyonrails(style = { style }),
      },
      {
        name: 'Tailwind',
        icon: (style) => SiTailwindcss(style = { style }),
      },
      {
        name: 'Bootstrap',
        icon: (style) => BsBootstrap(style = { style }),
      },
      {
        name: 'Capybara',
        icon: (style) => GiCapybara(style = { style }),
      },
      {
        name: 'Selenium',
        icon: (style) => SiSelenium(style = { style }),
      },
    ],
    tools: [
      {
        name: 'Github',
        icon: (style) => TbBrandGithub(style = { style }),
      },
      {
        name: 'Docker',
        icon: (style) => TbBrandDocker(style = { style }),
      },
      {
        name: 'Codekit',
        icon: (style) => BiCode(style = { style }),
      },
      {
        name: 'Codepen',
        icon: (style) => FiCodepen(style = { style }),
      },
      {
        name: 'Gitlab',
        icon: (style) => FiGitlab(style = { style }),
      },
      {
        name: 'Terminal',
        icon: (style) => BsTerminal(style = { style }),
      },
    ],

  }
);

export default skills_list;
