<template>
    <Navbar>
        <template #logo>
            <a href="#" class="flex items-center">
                <!-- <img src="/images/logo.svg" class="h-8 mr-3" alt="Fire UI Logo" /> -->
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fire UI</span>
            </a>
        </template>
        <template #default="{isShowMenu}" >
            <NavbarCollapse :isShowMenu="isShowMenu">
                <li>
                    <a link="#" isactive="true" component="a" linkattr="href" class="block py-2 pr-4 pl-3 rounded md:p-0 bg-blue-700 md:bg-transparent text-white md:text-blue-700 dark:text-white" href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a link="#" isactive="false" component="a" linkattr="href" class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="/">
                        Services
                    </a>
                </li>              
                
            </NavbarCollapse>
        </template>
    </Navbar> 
</template>
