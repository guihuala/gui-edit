<template>
    <div class="flex flex-col h-screen w-screen">
        <!-- 工具栏 -->
        <div class="navbar bg-neutral text-neutral-content">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" fill-rule="evenodd">
                            <path
                                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                            <path fill="currentColor"
                                d="M15.31 3a5.69 5.69 0 0 1 4.629 9A5.69 5.69 0 0 1 12 19.939A5.69 5.69 0 0 1 4.061 12A5.69 5.69 0 0 1 12 4.061A5.67 5.67 0 0 1 15.31 3m3.168 10.417a5.67 5.67 0 0 1-3.168.963h-.094a4 4 0 0 1-3.534 1.608a3.67 3.67 0 0 0 1.024 1.936a3.69 3.69 0 0 0 5.772-4.507M8.012 11.682a3.67 3.67 0 0 0-1.936 1.024a3.69 3.69 0 0 0 4.507 5.772a5.67 5.67 0 0 1-.963-3.168v-.094a4 4 0 0 1-1.608-3.534M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4m3.31-5c-.692 0-1.34.19-1.893.522c.608.905.963 1.996.963 3.168v.094a4 4 0 0 1 1.608 3.534a3.7 3.7 0 0 0 1.936-1.024A3.69 3.69 0 0 0 15.31 5M8.69 5a3.69 3.69 0 0 0-3.168 5.583A5.67 5.67 0 0 1 8.69 9.62h.094a4 4 0 0 1 3.534-1.608a3.7 3.7 0 0 0-1.024-1.936A3.68 3.68 0 0 0 8.69 5" />
                        </g>
                    </svg>Gui-edit</a>
                <button class="btn btn-ghost" @click="navigateToPage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <button class="btn btn-ghost" @click="importFile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none">
                            <path
                                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                            <path fill="currentColor"
                                d="M17.303 14.944a1.5 1.5 0 0 0-2.121 0L13.5 16.626V9a1.5 1.5 0 0 0-3 0v7.626l-1.682-1.682a1.5 1.5 0 1 0-2.122 2.121l4.243 4.243a1.5 1.5 0 0 0 2.121 0l4.243-4.243a1.5 1.5 0 0 0 0-2.121M5 2.5a1.5 1.5 0 1 0 0 3h14a1.5 1.5 0 0 0 0-3z" />
                        </g>
                    </svg>
                    <p class="hidden text-white lg:block">导入</p>
                </button>

                <button class="btn btn-ghost" @click="clearContent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none">
                            <path
                                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                            <path fill="currentColor"
                                d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z" />
                        </g>
                    </svg>
                    <p class="hidden text-white lg:block">清空</p>
                </button>
            </div>
            <div class="flex-none">
                <div class="dropdown dropdown-end">
                    <button class="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none">
                                <path
                                    d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                <path fill="currentColor"
                                    d="M6.697 9.056a1.5 1.5 0 0 0 2.121 0L10.5 7.375V15a1.5 1.5 0 1 0 3 0V7.374l1.682 1.682a1.5 1.5 0 1 0 2.121-2.121l-4.242-4.243a1.5 1.5 0 0 0-2.121 0L6.697 6.935a1.5 1.5 0 0 0 0 2.121M19 21.5a1.5 1.5 0 0 0 0-3H5a1.5 1.5 0 0 0 0 3z" />
                            </g>
                        </svg>
                        <p class="hidden text-white lg:block">导出</p>
                    </button>
                    <ul tabindex="0"
                        class="dropdown-content menu p-2 shadow  bg-neutral text-neutral-content rounded-box w-52">
                        <li><a @click="exportFile('html')">导出HTML</a></li>
                        <li><a @click="exportFile('markdown')">导出Markdown</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="flex flex-grow overflow-hidden p-5 g-5">
            <!-- Markdown 输入框 -->

            <textarea v-model="markdownContent" placeholder="输入markdown内容或直接将markdown文件拖拽进来"
                class="textarea textarea-lg w-1/2 h-full resize-none overflow-y-auto textarea-bordered mr-4"
                @dragover.prevent @drop="handleDrop"></textarea>

            <p class="text-neutral content-center hidden lg:block"><svg xmlns="http://www.w3.org/2000/svg" width="96"
                    height="96" viewBox="0 0 24 24">
                    <g fill="none">
                        <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path fill="currentColor"
                            d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z" />
                    </g>
                </svg></p>
            <!-- 渲染的 HTML -->
            <div class="textarea textarea-lg w-1/2 h-full resize-none overflow-y-auto textarea-bordered ml-4 "
                v-html="parsedContent">
            </div>
        </div>

        <footer class="footer footer-center bg-neutral text-neutral-content p-4">
            <aside>
                <p>markdown to html v1.0.0.</p>
            </aside>
        </footer>

    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';


const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value
            } catch (__) { }
        }
        return '' // 使用额外的安全措施来避免 XSS 攻击
    }
})

const markdownContent = ref('')

onMounted(() => {
    markdownContent.value = `# 欢迎来到Gui-edit👏

✅这是一个示例 Markdown 内容。

## 主要特点

- **简单易用**：使用 Markdown 语法书写内容
- **代码高亮**：支持多种编程语言的语法高亮
- **响应式图片**：图片将根据屏幕大小自动调整
- **导入及导出文本**：支持导入markdown格式文件及导入markdown和html格式文件
- **拖拽自动导入**：支持拖拽自动导入markdown格式文件

### 添加代码块

\`\`\`javascript
// 这是一个 JavaScript 代码块
[].forEach.call($$("*"),function(a){
  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16);
})
\`\`\`

### 添加单行代码块

\`console.log('示例代码');\`

### 添加链接

[点击这里访问我的博客](https://ghlg.fun)

### 添加图片

![你好](https://images.shoutwiki.com/lenen/5/5b/Le01TsuruMonochromeSprite.png)
![你好](https://s2.loli.net/2024/08/07/dRzmlq68gOnx4GY.png)



## 版本
目前为第一代版本，暂时不支持更多语法，仅有最简单的功能。

日后可能会增加功能。
    `;

});

const parsedContent = computed(() => {
    return md.render(markdownContent.value)
})

// 自定义渲染规则
md.renderer.rules.image = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const src = token.attrs[token.attrIndex('src')][1];
    const alt = token.content;
    const title = token.attrs[token.attrIndex('title')]
        ? token.attrs[token.attrIndex('title')][1]
        : alt;

    // 这里我们为图片添加自定义样式
    return `<img src="${src}" alt="${alt}" title="${title}" style="max-width:100%; height:auto;" />`;
};

// 导入 Markdown 文件
const importFile = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.md'

    input.addEventListener('change', event => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                markdownContent.value = e.target.result
            }
            reader.readAsText(file)
        }
    })

    input.click()
}

// 处理拖拽文件到输入框的功能
const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file && file.type === "text/markdown") {
        const reader = new FileReader()
        reader.onload = (e) => {
            markdownContent.value = e.target.result
        }
        reader.readAsText(file)
    }
}


function exportFile(format) {
    let content;
    let fileName;
    let mimeType;

    if (format === 'html') {
        content = parsedContent.value;
        fileName = 'exported.html';
        mimeType = 'text/html';
    } else if (format === 'markdown') {
        content = markdownContent.value;
        fileName = 'exported.md';
        mimeType = 'text/markdown';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
}

// 清空内容
const clearContent = () => {
    markdownContent.value = ''
}

const navigateToPage = () => {
  window.location.href = 'https://github.com/guihuala/gui-edit'; // 跳转到外部链接或特定路径
};
</script>