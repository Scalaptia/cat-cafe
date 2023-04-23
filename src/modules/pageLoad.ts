import '../style/style.css';

export default function pageLoad(tab: any) {
    const content = document.getElementById('content');
    content!.removeChild(content!.childNodes[1]!);
    content!.insertBefore(tab, content!.children[1]);
}

