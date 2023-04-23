import '../style/style.css';

export default function pageLoad(tab: any) {
    const content = document.getElementById('content');
    content!.removeChild(content!.lastChild!);
    content!.appendChild(tab);
}

