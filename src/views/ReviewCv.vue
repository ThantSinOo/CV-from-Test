<template>
    <div class="bg-light mains">
        <Navbar/>
        <div class="page"> 
    <div class="containers py-4">
        <h4 class="py-2">Review Worker CVs</h4>

        <div class="row mt-4">
            <!-- chose DOE Num -->
            <div class="form-group col-3">
                    <label for="doenum">DOE Number</label>
                        <select class="form-select bg-light" id="doenum">
                            <option >012123THB</option>
                            <option>2233232MYA</option>       
                        </select>
            </div>
            <!-- choose status -->
            <div class="col-4">
                <label class="mx-4">Status</label>
                <div class="d-flex mx-3 mt-1 ">
                    <span class="badge status rounded-pill text-bg-info mx-2"><font-awesome-icon icon="fa-solid fa-check" class="me-2" />Primary</span>
                    <span class="badge status rounded-pill text-bg-light mx-2">Primary</span>
                    <span class="badge status rounded-pill text-bg-light mx-2" >Primary</span>
                </div>
               
            </div>
        </div>
        <!-- Worker Table -->
        <div class="mt-5 me-3">
            <h6>8 Worker CVs</h6>
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Worker ID</th>
                        <th scope="col">Name(En)</th>
                        <th scope="col">NRC Number</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">001</th>
                            <td>123146UCD</td>
                            <td>EE PHYOE AUNG</td>
                            <td>10/KaSaNa(N)009875</td>
                            <td>Female</td>
                            <td><span class="badge rounded-pill text-bg-success mx-2">Accepted</span></td>
                            <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/></td>
                        </tr>
                        <tr>
                            <th scope="row">002</th>
                            <td>4656465AD</td>
                            <td>MEE HNIN PHYUE</td>
                            <td>10/TaKaKa(N)009875</td>
                            <td>Female</td>
                            <td><span class="badge rounded-pill text-bg-warning mx-2">Pending</span></td>
                            <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/></td>
                        </tr>
                        <tr>
                            <th scope="row">001</th>
                            <td>123146UCD</td>
                            <td>EE PHYOE AUNG</td>
                            <td>10/KaSaNa(N)009875</td>
                            <td>Female</td>
                            <td><span class="badge rounded-pill text-bg-success mx-2">Accepted</span></td>
                            <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/></td>
                        </tr>
                        <tr>
                            <th scope="row">002</th>
                            <td>4656465AD</td>
                            <td>MEE HNIN PHYUE</td>
                            <td>10/TaKaKa(N)009875</td>
                            <td>Female</td>
                            <td><span class="badge rounded-pill text-bg-warning mx-2">Pending</span></td>
                            <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/></td>
                        </tr>
                        <tr>
                            <th scope="row">001</th>
                            <td>123146UCD</td>
                            <td>EE PHYOE AUNG</td>
                            <td>10/KaSaNa(N)009875</td>
                            <td>Female</td>
                            <td><span class="badge rounded-pill text-bg-success mx-2">Accepted</span></td>
                            <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/></td>
                        </tr>
                        <tr>
                            <th scope="row">002</th>
                            <td>4656465AD</td>
                            <td>MEE HNIN PHYUE</td>
                            <td>10/TaKaKa(N)009875</td>
                            <td>Female</td>
                            <td><span class="badge rounded-pill text-bg-warning mx-2">Pending</span></td>
                            <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        
        <div>
            <div>
                <div>
                    <div class="modal-header">
                        <h5 class="modal-title">Worker CV Detail</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
        </div>
    </div>
  
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components:{Navbar},
}
</script>

<style>
.status{
    width: 150px;
    height: 30px;
    line-height: 19px;
}


</style>