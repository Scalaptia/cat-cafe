import '../style/style.css';

export default function pageLoad(newTab: any) {
    const content = document.getElementById('content');
    window.scrollTo(0,0)
    content!.removeChild(content!.childNodes[1]!);
    content!.insertBefore(newTab, content!.children[1]);
}

