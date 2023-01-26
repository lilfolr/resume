import { FormattedText, TerminalContentTypeResponse } from '../types';

const lb = (t: string): FormattedText => ({
  format: 'LargeBold',
  text: t
});

const b = (t: string): FormattedText => ({
  format: 'Bold',
  text: t
});

const t = (t: string): FormattedText => ({
  format: 'Normal',
  text: t
});

const a = (t: string): FormattedText => ({
  format: 'Link',
  text: t
});

export const about: TerminalContentTypeResponse = {
  type: 'response',
  content: [
    {
      format: 'Normal',
      text: 'Software engineering professional with proven experience in web application development and full application lifecycle development. Known for passion in developing innovative solutions that expedite the efficiency of project delivery, as well as the unique ability to apply strategic thinking in alignment of an organisation’s vision. Collaborate well with colleagues and management by actively listening to other’s perspectives while offering creative solutions to complex problems. Able to exercise leadership and take on a variety of roles within the team. Keen knowledge in cybersecurity, with a desire to expand knowledge in the area.'
    }
  ]
};

export const education: TerminalContentTypeResponse = {
  type: 'response',
  content: [
    lb('Masters'),
    'NewLine',
    b('Degree:         '),
    t('Master of Professional Engineering'),
    'NewLine',
    b('University:     '),
    t('University of Western Australia'),
    'NewLine',
    b('Specialisation: '),
    t('Software Engineering'),
    'NewLine',
    'NewLine',

    lb('Bachelors'),
    'NewLine',
    b('Degree:                '),
    t('Bachelor of Science'),
    'NewLine',
    b('University:            '),
    t('University of Western Australia'),
    'NewLine',
    b('Degree Specific Major: '),
    t('Engineering Science'),
    'NewLine',
    b('Second Major:          '),
    t('Computer Science')
  ]
};

export const interests: TerminalContentTypeResponse = {
  type: 'response',
  content: [
    b("Certificates & Awards"),
    'NewLine',
    t("AWS Certified Advanced Networking - Specialty [2022]"),
    'NewLine',
    t("AWS Certified Solutions Architect - Associate [2021]"),
    'NewLine',
    t("Certified SAFe® 4 Agilist [2019]"),
    'NewLine',
    t("MCPS: Microsoft Certified Professional"),
    'NewLine',
    t("MS: Programming in HTML5 with JavaScript and CSS3 Specialist"),
    'NewLine',
    t("The Institute of Engineers, Australia award for Engineering Studies: 2012"),
    'NewLine',
    'NewLine',

    b("Volunteering"),
    'NewLine',
    t("Mentor for SheCodes: "),
    a("https://shecodes.com.au"),

    'NewLine',
    'NewLine',
    b("Own Projects"),
    'NewLine',
    t("Core maintainer of react timeline component: "),
    a("https://github.com/React9k/react-timeline-9000"),
    'NewLine',
    'NewLine',
    t("Adapted the Linux kernel networking stack to create a custom TCP-like protocol"),
    'NewLine',
    'NewLine',
    t("Created a IPTables firewall simulator using docker containers and extracted IPTables kernel modules."),
    'NewLine',
    a("https://github.com/lilfolr/GENG5511"),
    'NewLine',
    'NewLine',
    t("Built a react native bitbucket app: "),
    'NewLine',
    a("https://play.google.com/store/apps/details?id=com.lrlilford.bitbox"),


  ]
};

export const profiles: TerminalContentTypeResponse = {
  type: 'response',
  content: [
    b('LinkedIn:      '),
    a('https://www.linkedin.com/in/leightonlilford'),
    'NewLine',
    b('GitHub:        '),
    a('https://github.com/lilfolr'),
    'NewLine',
    b('StackOverflow: '),
    a('https://stackoverflow.com/users/3535990/'),
    'NewLine',
    b('Website:       '),
    a('https://lrlilford.com/')
  ]
};
