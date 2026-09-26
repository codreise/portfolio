export function initSkillProficiency() {
  const skills = document.querySelector('#skills .skills-bento');
  if (!skills) return;
  const groups = {
    Frontend: [['js', 'JavaScript'], ['react', 'React'], ['html', 'HTML5'], ['css', 'CSS3'], ['redux', 'Redux'], ['form', 'Formik / Yup']],
    Backend: [['node', 'Node.js'], ['express', 'Express'], ['api', 'REST API'], ['socket', 'Socket.IO']],
    Databases: [['postgres', 'PostgreSQL'], ['mongo', 'MongoDB'], ['sql', 'SQL']],
    Tools: [['git', 'Git / GitHub'], ['docker', 'Docker']]
  };
  const icons = {
    js: '<path d="M3 3h18v18H3zM12.3 17.2c.6 1 1.4 1.5 2.5 1.5.9 0 1.5-.4 1.5-1 0-.7-.6-1-1.7-1.5l-.6-.3c-1.7-.7-2.5-1.5-2.5-3.1 0-1.6 1.3-2.8 3.2-2.8 1.4 0 2.4.5 3.1 1.8l-1.7 1.1c-.4-.7-.8-1-1.4-1-.6 0-1 .3-1 .8 0 .6.4.8 1.4 1.3l.6.3c1.7.8 2.6 1.6 2.6 3.2 0 1.8-1.4 3-3.6 3-2 0-3.3-1-4-2.4l1.6-.9Zm-5.3-7h2.1v5.8c0 1.3-.5 2.1-1.5 2.1-.7 0-1.2-.3-1.6-.8l-1.4 1.1c.7 1.1 1.7 1.7 3.1 1.7 2.1 0 3.5-1.3 3.5-3.9v-6z"/>',
    react: '<path d="M12 3.2c1.7 0 3.1 3.9 3.1 8.8s-1.4 8.8-3.1 8.8-3.1-3.9-3.1-8.8S10.3 3.2 12 3.2Z"/><path d="M4.4 7.6c.8-1.4 4.8-.7 8.6 1.7s6.2 4.8 5.4 6.2-4.8.7-8.6-1.7-6.2-4.8-5.4-6.2Z"/><path d="M4.4 15.5c-.8-1.4 1.6-3.8 5.4-6.2s7.8-3.1 8.6-1.7-1.6 3.8-5.4 6.2-7.8 3.1-8.6 1.7Z"/><circle cx="12" cy="12" r="1.4"/>',
    html: '<path d="M3 3h18l-1.7 15.5L12 21l-7.3-2.5L3 3Zm3.3 3.2.3 3.4h12.2l-.3 3.5H8.8l.3 2.1 3.8.8 3.8-.8.3-2.1h2.2l-.6 4-5.7 1.3-5.7-1.3L6.1 12h2.2l.2 1.5h7l.2-1.5H5.9L5.3 5.2h14.1l-.2 2.2H7.7l-.2-2.2H5.3Z"/>',
    css: '<path d="M3 3h18l-1.7 15.5L12 21l-7.3-2.5L3 3Zm3.4 3 .3 3.1h10.5l-.3 2.3H7l.3 2.9 4.7 1.3 4.7-1.3.3-2.1h2.1l-.5 4-6.6 1.8-6.6-1.8L5 11.4h2.2L7 8.3h12.1l.3-2.3H6.4Z"/>',
    node: '<path d="M12 2.5c-5.5 0-9 2.3-9 5.2v8.6c0 2.9 3.5 5.2 9 5.2s9-2.3 9-5.2V7.7c0-2.9-3.5-5.2-9-5.2Zm6.5 13.8c0 1.4-2.6 2.6-6.5 2.6s-6.5-1.2-6.5-2.6v-2.1c1.6 1.1 3.9 1.6 6.5 1.6s4.9-.5 6.5-1.6v2.1Zm0-4.3c0 1.4-2.6 2.6-6.5 2.6s-6.5-1.2-6.5-2.6V9.9c1.6 1.1 3.9 1.6 6.5 1.6s4.9-.5 6.5-1.6V12Z"/>',
    express: '<path d="M4 4h16v16H4V4Zm3 3v10h2V7H7Zm4 0v10h2V7h-2Zm4 0v10h2V7h-2Z"/>',
    api: '<path d="M5 5h14v14H5V5Zm2 3v2h4V8H7Zm0 4v2h10v-2H7Zm0 4h6v-2H7v2Z"/>',
    socket: '<path d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 7v4m0 0-7 6m7-6 7 6"/>',
    postgres: '<path d="M12 3c4.4 0 8 1.3 8 3v12c0 1.7-3.6 3-8 3s-8-1.3-8-3V6c0-1.7 3.6-3 8-3Zm-5.5 4.2C7.7 8 9.7 8.4 12 8.4s4.3-.4 5.5-1.2V6.3c-.8.7-3 1.2-5.5 1.2S7.3 7 6.5 6.3v.9Zm0 4.6c1.2.8 3.2 1.2 5.5 1.2s4.3-.4 5.5-1.2v-1.3c-1.2.8-3.2 1.2-5.5 1.2s-4.3-.4-5.5-1.2v1.3Z"/>',
    mongo: '<path d="M12 2.5c-4.7 0-7.5 2.1-7.5 5v9c0 2.9 2.8 5 7.5 5s7.5-2.1 7.5-5v-9c0-2.9-2.8-5-7.5-5Zm0 2.5c3.1 0 5 .9 5 2s-1.9 2-5 2-5-.9-5-2 1.9-2 5-2Zm5 11.5c0 1.1-1.9 2-5 2s-5-.9-5-2v-2c1.4.8 3 1.1 5 1.1s3.6-.3 5-1.1v2Z"/>',
    sql: '<path d="M4 5h16v3H4V5Zm0 5h10v3H4v-3Zm0 5h16v3H4v-3Z"/>',
    git: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 2.8L5.5 8.4v7.2l6.5 3.6 6.5-3.6V8.4L12 4.8Zm-1.2 3h2.4v5.1l3.2-1.8 1.2 2.1-5.6 3.1-5.6-3.1 1.2-2.1 3.2 1.8V7.8Z"/>',
    docker: '<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 2.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm-1.2 2h2.4v4.1l2.5 1.5-1.2 2-3.7-2.3V7.5Z"/>'
  };
  skills.innerHTML = Object.entries(groups).map(([category, items]) => `
    <article class="skill-group">
      <div class="skill-heading"><span class="skill-icon" aria-hidden="true">${category === 'Frontend' ? '</>' : category === 'Backend' ? '{}' : category === 'Databases' ? 'DB' : '↗'}</span><h3>${category}</h3></div>
      <div class="skill-tags">
          ${items.map(([icon, name]) => `<span class="skill-badge${['JavaScript', 'React', 'Node.js', 'PostgreSQL'].includes(name) ? ' skill--primary' : ''}" aria-label="${name}"><span class="skill-badge__icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">${icons[icon]}</svg></span><span class="skill-badge__name">${name}</span><span class="skill-level">85%</span></span>`).join('')}
      </div>
    </article>`).join('');
}
