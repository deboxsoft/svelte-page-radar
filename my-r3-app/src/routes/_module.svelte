<script>
import "../input.css";
   
import Navbar from "../components/_navbar.svelte";

import Sidebar from "../components/_sidebar.svelte";
import SidebarRight from "../components/_sidebarKanan.svelte"
</script>



<Navbar/>
<Sidebar/>
<SidebarRight/>


<a href="/">Home</a>
<a href="/john">people</a>
<slot />
