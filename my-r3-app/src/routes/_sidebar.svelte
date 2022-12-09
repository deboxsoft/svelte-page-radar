<script>
  
  export let data = [{
    bab1: {
      title: "Bab 1 Java",
      subtopic: [{
        label: "",
        link: "/subtopic/main"
        
      }]
    }
 
  }];
  
  export let title;
  
</script>
<slot  name="default" />

<h2>{title}</h2>
<aside class=" w-64 h-full fixed overflow-y-scroll">
      <slot name="header" />
        <div class="m-7">
            <ul>
                <li>
                    <h5 class="font-semibold text-slate-900 mb-3">Bab 1 Java</h5>
                    <ul class="font-normal ml-4 text-slate-900 text-sm list-item">
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Sign Up Oracle</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Download JDK</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Instalasi JDK</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Instalasi Netbeans</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Proyek Hello World</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <h5 class="font-semibold text-slate-900 mb-3">Bab 2 Data</h5>
                    <ul class="font-normal ml-4 text-slate-900 text-sm list-item">
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Variable</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Type Data</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Basic Input Output </a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Arithmetic Operation</a>
                        </li>

                    </ul>
                </li>

                <li>
                    <h5 class="font-semibold text-slate-900 mb-3">Bab 3 Control Flow </h5>
                    <ul class="font-normal ml-4 text-slate-900 text-sm list-item">
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Statement</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Looping</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Exception Handling </a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">String Function</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <h5 class="font-semibold text-slate-900 mb-3">Bab 4 Array </h5>
                    <ul class="font-normal ml-4 text-slate-900 text-sm list-item">
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Array One Dimensions</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Array List</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Vector </a>
                        </li>
                    </ul>
                </li>



                <li>
                    <h5 class="font-semibold text-slate-900 mb-3">Bab 5 Functions </h5>
                    <ul class="font-normal ml-4 text-slate-900 text-sm list-item">
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Parameter & Non Parameter</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Static & Non Static</a>
                        </li>
                        <li class="hover:text-cyan-500 duration-600 mb-3">
                            <a href="">Void & Return</a>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
        </div>
    </aside>

