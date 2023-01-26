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

export const skills: TerminalContentTypeResponse = {
  type: 'response',
  content: [
    lb('Languages'),
    'NewLine',
    b('Python:                  Highly Proficient'),
    'NewLine',
    t('Django; DjangoRestFramework; Flask; Celery'),
    'NewLine',
    b('TypeScript & JavaScript: Highly Proficient'),
    'NewLine',
    t('ReactJS; NodeJS'),
    'NewLine',
    b('Shell Scripting:         Proficient'),
    'NewLine',
    t('Bash; Make'),
    'NewLine',
    b('Java:                    Proficient'),
    'NewLine',
    'NewLine',

    lb('Tools and Systems'),
    'NewLine',
    b('Git:                       Highly Proficient'),
    'NewLine',
    b('Linux:                     Highly Proficient'),
    'NewLine',
    t('AmazonLinux; Ubuntu; Redhat'),
    'NewLine',
    b('AWS:                       Highly Proficient'),
    'NewLine',
    b('Github; GitLab; Bitbucket: Highly Proficient'),
    'NewLine',
    b('Kubernetes:                Proficient'),
    'NewLine',
    b('IoT:                       Familiar'),
    'NewLine',
    b('Kafka:                     Familiar'),
    'NewLine'
  ]
};

// TODO: Rest
export const experience: TerminalContentTypeResponse = {
  type: 'response',
  content: [
    lb('Software Development Engineer - Networking, Amazon Web Services'),
    'NewLine',
    b('2019-Present'),
    'NewLine',
    t(
      'Maintained and built enhancements for several long-standing applications used internally by AWS to ensure networking infrastructure is both kept up to date, and any blockers or systemic issues hindering deployment velocity are revealed. The expertise I bring to the team includes advanced awareness of modern frontend technologies; excellent knowledge on Linux and AWS services and innovative problem-solving skills.'
    ),
    'NewLine',
    t('Technologies used in this role:'),
    'NewLine',
    t('- ReactJS'),
    'NewLine',
    t('- Java'),
    'NewLine',
    t('- Python'),
    'NewLine',
    t('- UI testing - Pupeteer'),
    'NewLine',
    t('- Agile workflows (Kanban & Scrum)'),
    'NewLine',
    'NewLine',

    lb('Specialist Software Developer - BHP'),
    'NewLine',
    b('2016-2019'),
    'NewLine',
    t(
      "Worked on several bespoke applications for BHP's WAIO assets including a fatigue management website, a document management system, and recently as a core developer for a global rostering solution."
    ),
    'NewLine',
    t('Technologies used in this role:'),
    'NewLine',
    t('- ReactJS'),
    'NewLine',
    t('- TDD with Jest'),
    'NewLine',
    t('- Django web framework'),
    'NewLine',
    t('- Ansible & CloudFormation on AWS'),
    'NewLine',
    t('- CI/CD with BitBucket Pipelines; TravisCI and TeamCity'),
    'NewLine',
    t('- Nginx & Gunicorn configuration'),
    'NewLine',
    t('- Monitoring and logging on AWS CloudWatch'),
    'NewLine',
    t('- Agile workflow using Jira & BitBucket'),
    'NewLine',
    'NewLine',

    lb('Undergraduate Developer - BHP'),
    'NewLine',
    b('2015-2016'),
    'NewLine',
    t(
      'Tasked with various .net focused assignments, including reverse engineering .net binaries to be used in future analysis and optimisation projects, and overhauling SSIS packages for BHP’s rail operations.'
    ),
    'NewLine',
    t('Technologies used in this role:'),
    'NewLine',
    t('- Asp.net MVC web application'),
    'NewLine',
    t('- .net reverse engineering'),
    'NewLine',
    t('- MS SQL development'),
    'NewLine',
    'NewLine',

    lb('Developer - MiX Telematics'),
    'NewLine',
    b('2012-2015'),
    'NewLine',
    t(
      'Assisted the Perth & Dubai offices with bespoke applications and scripts to optimise business operations and workflows.'
    ),
    'NewLine',
    t(
      '- Designed schema and maintained SQL databases for collecting and maintaining quality control records.'
    ),
    'NewLine',
    t(
      '- Designed schema and maintained SQL databases for collecting and maintaining quality control records.'
    ),
    'NewLine',
    t(
      '- Developed and maintain a PHP/MySQL website used to host documents for a client.'
    ),
    'NewLine',
    t('- Developed asp.net website running on IIS 7 to manage QC processes.'),
    'NewLine',
    t(
      '- Create ad-hoc client-specific reports, and scripts to help efficiency internally.'
    ),
    'NewLine',
    t(
      '- Communication with clients from the mining industry, oil and gas industry, postal services and fleet services to provide organisation specific solutions.'
    ),
    'NewLine',
    t(
      '- Worked collaboratively with the Dubai IT Manager using active directory domain services.'
    )
  ]
};

export const interests: TerminalContentTypeResponse = {
  type: 'response',
  content: [
    b('Certificates & Awards'),
    'NewLine',
    t('AWS Certified Advanced Networking - Specialty [2022]'),
    'NewLine',
    t('AWS Certified Solutions Architect - Associate [2021]'),
    'NewLine',
    t('Certified SAFe® 4 Agilist [2019]'),
    'NewLine',
    t('MCPS: Microsoft Certified Professional'),
    'NewLine',
    t('MS: Programming in HTML5 with JavaScript and CSS3 Specialist'),
    'NewLine',
    t(
      'The Institute of Engineers, Australia award for Engineering Studies: 2012'
    ),
    'NewLine',
    'NewLine',

    b('Volunteering'),
    'NewLine',
    t('Mentor for SheCodes: '),
    a('https://shecodes.com.au'),

    'NewLine',
    'NewLine',
    b('Own Projects'),
    'NewLine',
    t('Core maintainer of react timeline component: '),
    a('https://github.com/React9k/react-timeline-9000'),
    'NewLine',
    'NewLine',
    t(
      'Adapted the Linux kernel networking stack to create a custom TCP-like protocol'
    ),
    'NewLine',
    'NewLine',
    t(
      'Created a IPTables firewall simulator using docker containers and extracted IPTables kernel modules.'
    ),
    'NewLine',
    a('https://github.com/lilfolr/GENG5511'),
    'NewLine',
    'NewLine',
    t('Built a react native bitbucket app: '),
    'NewLine',
    a('https://play.google.com/store/apps/details?id=com.lrlilford.bitbox')
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
