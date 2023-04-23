import '../style/footer.css'

export default function Footer() {
    const footer = document.createElement('footer');
    const githubName = document.createElement('p');
    const githubIcon = document.createElement('div');
    githubIcon.classList.add('github-icon');
        const githubLink = document.createElement('a');
        githubLink.classList.add('link')
        githubLink.href = 'https://github.com/Scalaptia/';
        githubLink.target = '_blank'
        githubIcon.appendChild(githubLink);
    

    githubName.innerText = 'Scalaptia © 2023';
    footer.appendChild(githubName);
    footer.appendChild(githubIcon);

    return footer
}