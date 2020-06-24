// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [{
  title: 'Javascript',
  competency: 3,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'React',
  competency: 3,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Bash',
  competency: 3,
  category: ['Tools', 'Languages'],
},
{
  title: 'Amazon Web Services',
  competency: 4,
  category: ['Web Development', 'Tools', 'Cloud Computing'],
},
{
  title: 'Heroku',
  competency: 2,
  category: ['Web Development', 'Tools', 'Cloud Computing'],
},
{
  title: 'MongoDB',
  competency: 2,
  category: ['Web Development', 'Databases'],
},
{
  title: 'MySQL/SQL',
  competency: 4,
  category: ['Web Development', 'Databases', 'Languages', 'Cloud Computing'],
},
{
  title: 'HBase',
  competency: 4,
  category: ['Web Development', 'Databases', 'Cloud Computing'],
},
{
  title: 'Express.JS',
  competency: 2,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Git',
  competency: 3,
  category: ['Tools'],
},
{
  title: 'Docker',
  competency: 3,
  category: ['Tools', 'Cloud Computing'],
},
{
  title: 'Kubernetes',
  competency: 3,
  category: ['Tools', 'Cloud Computing'],
},
{
  title: 'Google Cloud Compute',
  competency: 4,
  category: ['Tools', 'Web Development', 'Cloud Computing'],
},
{
  title: 'Microsoft Azure',
  competency: 3,
  category: ['Tools', 'Web Development', 'Cloud Computing'],
},
{
  title: 'Numpy',
  competency: 2,
  category: ['Data Science', 'Data Engineering', 'Python'],
},
{
  title: 'PyTorch',
  competency: 2,
  category: ['Data Science', 'Python'],
},
{
  title: 'HTML + CSS',
  competency: 3,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Java',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'Python',
  competency: 3,
  category: ['Languages', 'Python'],
},
{
  title: 'C/C++',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'C#',
  competency: 2,
  category: ['Languages', 'Game Development'],
},
{
  title: 'Go',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'Hadoop',
  competency: 3,
  category: ['Data Engineering', 'Data Science', 'Cloud Computing'],
},
{
  title: 'Spark',
  competency: 2,
  category: ['Data Engineering', 'Data Science', 'Cloud Computing'],
},
{
  title: 'Unity',
  competency: 3,
  category: ['Game Development'],
},
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
