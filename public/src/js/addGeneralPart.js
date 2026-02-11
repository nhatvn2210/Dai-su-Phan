// DOM
const header = document.querySelector('.header');
// Function
const addHeader = () => {
    let htmls =
        `
        <nav class="flex h-[64px] justify-evenly py-[15px] uppercase text-xl items-center roboto-medium">
            <div class="icon w-[25%] justify-center flex">
            
            </div>
            <div class="menu w-[75%] h-full justify-end flex items-center">
                <ul class="flex justify-evenly">
                    <li>
                        <a href="./news.html">Tin tức - Sự kiện</a>
                    </li>
                    <li>
                        <a href="./library.html">Thư viện di sản</a>
                    </li>
                    <li>
                        <a href="./goctrian.html">Góc Tri ân</a>
                    </li>
                    <li>
                        <a href="./about.html">Cổng liên hệ</a>
                    </li>
                    <li>
                        <a href="./blog.html">Cộng đồng học sinh</a>
                    </li>
                </ul>
                <p>
                    <a href="./register.html">Register</a>
                    <span> / </span>
                    <a href="./login.html">Login</a>
                </p>
            </div>
        </nav>
    `;
    header.innerHTML = htmls;
    header.classList.add("w-full");
    header.classList.add("top-0");
    header.classList.add("z-[99]");
    header.classList.add("fixed");
    header.classList.add("roboto-bold");
}
// Main script
addHeader();