import {useState} from "react";
import {LanguageContext} from "../context.ts";
import {ILang} from "../../types/context-types.ts";
import portfolioProjectsImageBack_Shop from '../../assets/images/main/projects-backgrounds/shop-back.jpg'
type ILangType = 'en' | 'ua';
const LanguageProvider = ({children}) => {
    const [isLang, setIsLang] = useState<ILangType>('en');

    const language: ILang = {
        ua: {
            header: {
                nav: {
                    about: 'Про мене',
                    skills: 'Навички',
                    portfolio: 'Портфоліо',
                    contactMe: "Зв'язатися"
                }
            },
            main: {
                intro: {
                    name: 'Мене звати Богдан',
                    job: 'Я Frontend розробник'
                },
                about: {
                    title: 'Про мене',
                    description: "Frontend розробник з технічною освітою (КПІ, бакалавр комп'ютерно-інтегрованих технологій). Маю успішний досвід роботи в міжнародній команді, де активно співпрацював з дизайнерами та backend розробниками англійською мовою (рівень B1/B2). Спеціалізуюсь на розробці масштабованих додатків з використанням TypeScript/React/Redux . Фокусуюсь на написанні чистого, підтримуваного коду та створенні якісного користувацького досвіду. Прагну приєднатися до команди професіоналів, де зможу як набути нового досвіду, так і зробити значний внесок у розвиток проектів компанії."
                },
                skill: {
                    title: 'Навички',
                    subtitle: {
                        useNow: 'ВИКОРИСТОВУЮ ЗАРАЗ:',
                        learn: 'ВИВЧАЮ:',
                        other: 'Інші навички:',
                    }
                },
                portfolio: {
                    title: 'Мої роботи',
                    projects: [
                        {
                            name: 'Магазин',
                            description: 'Використовувались: React,Redux,React-Form,React-Router',
                            liveDemo: 'https://store-orcin-six.vercel.app/',
                            gitHub:'https://github.com/barsuchellos/Store',
                            background: portfolioProjectsImageBack_Shop,
                        },
                        {
                            name: 'Магазин',
                            description: 'Використовувались: React,Redux,React-Form,React-Router',
                            liveDemo: 'https://store-orcin-six.vercel.app/',
                            gitHub:'https://github.com/barsuchellos/Store',
                            background: portfolioProjectsImageBack_Shop,
                        },
                        {
                            name: 'Магазин',
                            description: 'Використовувались: React,Redux,React-Form,React-Router',
                            liveDemo: 'https://store-orcin-six.vercel.app/',
                            gitHub:'https://github.com/barsuchellos/Store',
                            background: portfolioProjectsImageBack_Shop,
                        },
                    ]
                },
                contactMe: {
                    title: "Зв'язатися",
                    description: 'Маєте запитання чи пропозиції? Я завжди радий допомогти!\n' +
                        '\n' +
                        "Заповніть форму нижче, і я зв'яжусь з вами протягом 24 годин.",
                    form: {
                        placeholderName: "ВВЕДІТЬ ВАШЕ ІМ'Я*",
                        placeholderEmail: 'ВВЕДІТЬ ВАШУ ЕЛЕКТРОННУ ПОШТУ*',
                        placeholderNumber: 'НОМЕР ТЕЛЕФОНУ',
                        placeholderMessage: 'ВАШЕ ПОВІДОМЛЕННЯ*',
                        buttonName: 'Надіслати',
                    }
                }
            },
            footer: {
                backToTop: 'Повернутись на вверх'
            }
        },

        en: {
            header: {
                nav: {
                    about: 'About me',
                    skills: 'Skills',
                    portfolio: 'Portfolio',
                    contactMe: 'Contact me'
                }
            },
            main: {
                intro: {
                    name: 'my name is Bohdan',
                    job: 'I’M A Frontend DEVELOPER'
                },
                about: {
                    title: 'About me',
                    description:  "Frontend Developer with a technical background in Computer Integrated Technologies (Bachelor's degree from Kyiv Polytechnic Institute). I have successful experience working in an international team, actively collaborating with designers and backend developers in English (B1/B2 level). I specialize in developing scalable applications using TypeScript/React/Redux. My focus is on writing clean, maintainable code and creating high-quality user experiences. I am eager to join a team of professionals where I can both gain new experience and make significant contributions to the company's projects."
                },
                skill: {
                    title: 'Skills',
                    subtitle: {
                        useNow: 'USING NOW:',
                        learn: 'LEARNING:',
                        other: 'Other skills:',
                    }
                },
                portfolio: {
                    title: 'My works',
                    projects: [
                        {
                            name: 'Shop',
                            description: 'Use: React,Redux,React-Form,React-Router',
                            liveDemo: 'https://store-orcin-six.vercel.app/',
                            gitHub:'https://github.com/barsuchellos/Store',
                            background: portfolioProjectsImageBack_Shop,
                        },
                        {
                            name: 'Shop',
                            description: 'Use: React,Redux,React-Form,React-Router',
                            liveDemo: 'https://store-orcin-six.vercel.app/',
                            gitHub:'https://github.com/barsuchellos/Store',
                            background: portfolioProjectsImageBack_Shop,
                        },
                        {
                            name: 'Shop',
                            description: 'Use: React,Redux,React-Form,React-Router',
                            liveDemo: 'https://store-orcin-six.vercel.app/',
                            gitHub:'https://github.com/barsuchellos/Store',
                            background: portfolioProjectsImageBack_Shop,
                        },
                    ]
                },
                contactMe: {
                    title: "CONTACT",
                    description: "Have questions or suggestions? I'm always happy to help!\n" +
                        '\n' +
                        'Fill out the form below, and I will get back to you within 24 hours.',
                    form: {
                        placeholderName: 'ENTER YOUR NAME*',
                        placeholderEmail: 'ENTER YOUR EMAIL*',
                        placeholderNumber: 'PHONE NUMBER',
                        placeholderMessage: 'YOUR MESSAGE*',
                        buttonName: 'Submit',
                    }
                }
            },
            footer: {
                backToTop: 'Back to top'
            }
        }
    };

    function changeLanguage(language:ILangType):void {
        setIsLang(language);
    }

    return (
        <LanguageContext.Provider value={{isLang, changeLanguage, language}}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
