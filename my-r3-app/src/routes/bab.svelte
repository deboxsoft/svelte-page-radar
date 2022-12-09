<script>
  import Sidebar from "./_sidebar.svelte";
  const data = [{
    bab1: {
      title: "Bab 1 Java",
      subtopic: [{
        label: "",
        link: "/subtopic/main"
        
      }]
    }
  
  }];
</script>

<Sidebar data={data} title="bab 1" >
  <div slot="default">child </div>
  <div slot="header">
    header
  </div>
</Sidebar>


<div class="ml-64 mr-0 min-h-screen">

        <!-- tombol atas -->
        <div class="p-10 flex  justify-between">
            <div class="">
                <label class="text-4xl">Java Dasar</label>
                <a href="" class=" text-white text-xs ml-2 bg-blue-400 py-1 px-2 rounded-md">edit</a>
            </div>
            <div class="text-sm pt-3">
                <a href="" class="text-white bg-green-500 rounded-lg px-3 py-3">Publikasi</a>
                <a href="" class="bg-gray-300 rounded-lg p-3">Batal Publikasi</a>
            </div>
        </div>
        <!-- tengah -->
        <div class="flex justify-between  mb-10 ">
            <div class="flex">
                <span class="">
                    <input type="text" class="border rounded font-normal text-sm px-3 py-1 ml-10
                        border-blue-400 hover:border-blue-600 focus:border-2 focus:ring-blue-600 focus:outline-none"
                        placeholder="Search Bab">
                </span>
                <span class=""></span>
            </div>

            <div class="flex">
                <a href="#" class="text-sm text-white bg-blue-700 px-4 py-3 rounded mr-10 font-normal">
                    Buat Bab
                </a>
            </div>
        </div>

        <!-- table -->
        <div class="px-10">
            <table class="border w-full mx-auto text-justify ">
                <thead class="text-slate-700 bg-gray-200 border font-semibold text-sm  ">
                    <tr>
                        <th class="py-3 px-6">Bab</th>
                        <th>Sub Bab</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:cursor-pointer font-normal hover:bg-blue-100 text-sm">
                        <td class="py-3 px-6 ">Java Fundamental</td>
                        <td>6</td>
                        <td>Terpublikasi</td>
                    </tr>
                    <tr class="hover:cursor-pointer font-normal hover:bg-blue-100 text-sm">
                        <td class="py-3 px-6 ">Java Advanced</td>
                        <td>5</td>
                        <td>Terpublikasi</td>
                    </tr>
                    <tr class="hover:cursor-pointer font-normal hover:bg-blue-100 text-sm">
                        <td class="py-3 px-6">Java Hibernate</td>
                        <td>4</td>
                        <td>Terpublikasi</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
