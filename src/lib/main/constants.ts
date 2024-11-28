import cssLogo from "../../assets/images/tech-logo/css3-plain.svg";
import SkillGit from "../../assets/images/tech-logo/git-plain.svg";
import SkillHtml from "../../assets/images/tech-logo/html5-plain.svg";
import SkillSass from "../../assets/images/tech-logo/sass-original.svg";
import SkillJS from "../../assets/images/tech-logo/javascript-original.svg";
import SkillReact from "../../assets/images/tech-logo/react-original.svg";
import SkillTypescript from "../../assets/images/tech-logo/typescript-original.svg";
import SkillRedux from "../../assets/images/tech-logo/redux.svg";
import newSkillNodejs from "../../assets/images/tech-logo/nodejs-plain.svg";
import NewSkillGraph from "../../assets/images/tech-logo/graph.svg";
import newSkillTailwind from "../../assets/images/tech-logo/tailwind.svg";
import newSkillNextJs from "../../assets/images/tech-logo/nextjs-icon-svgrepo-com.svg";
import englishLogo from "../../assets/images/tech-logo/english.svg";


export interface ISkill {
    text: string,
    image: string | object,
}

export const skills: ISkill[] = [
    {
        text: 'Css',
        image: cssLogo,
    },
    {
        text: 'Git',
        image: SkillGit,
    },
    {
        text: 'Html',
        image: SkillHtml,
    },
    {
        text: 'Sass',
        image: SkillSass,
    },
    {
        text: 'JS',
        image: SkillJS,
    },
    {
        text: 'React',
        image: SkillReact,
    },
    {
        text: 'Typescript',
        image: SkillTypescript,
    },
    {
        text: 'Redux',
        image: SkillRedux,
    },

]

export const newSkills: ISkill[] = [
    {
        text: 'Node JS',
        image: newSkillNodejs,
    },
    {
        text: 'GraphQL',
        image: NewSkillGraph,
    },
    {
        text: 'tailwind',
        image: newSkillTailwind,
    },
    {
        text: 'Next Js',
        image: newSkillNextJs,
    },
]
export const otherSkills: ISkill[] = [
    {
        text: 'English B1/B2',
        image: englishLogo,
    },
]
