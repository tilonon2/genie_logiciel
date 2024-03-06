import { createRouter, createWebHistory } from 'vue-router'

// page acceuil
import  PageAccueil from  '@/views/view_tilo/PageAccueil.vue';

// tableua de bord
import tableau_bordVue from '@/views/view_yeo/tableau_bord.vue'
import dashboardVue from '@/components/admin/tableau_bord/contenu/dashboard/dashboard.vue'

// personnel
import personnelVue from '@/views/view_yeo/personnel.vue'
import gestion_personnelVue from '@/components/admin/gestion_personnel/gestion_personnel.vue'
import droit_accesVue from '@/components/admin/gestion_personnel/droit_d\'acces.vue'
import candidatVue from '@/views/view_yeo/candidat.vue'

// test
import test from '@/views/view_yeo/test.vue'
import creer_test from '@/components/admin/test_psycho/creer_test.vue'
import enregister_test from '@/components/admin/test_psycho/enregister_test.vue'


// comtabilité
import comptabiliteVue from '@/views/view_yeo/comptabilite.vue'
import payementVue from '@/components/admin/gestion_comptable/payement.vue'
import suivie_debit_creditVue from '@/components/admin/gestion_comptable/suivie_debit_credit.vue'

import editionsVue from '@/views/view_yeo/editions.vue'
import sauvegardes_restaurationsVue from '@/views/view_yeo/sauvegardes_restaurations.vue'

// clients
import clientsVue from '@/views/view_yeo/clients.vue'
import gestion_clientsVue from '@/components/admin/gestion_client/gestion_clients.vue'
import appel_offreVue from '@/components/admin/gestion_client/appel_offre.vue'
import piste_auditVue from '@/views/view_yeo/piste_audit.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tableau_bord',
      name: 'tableau de bord',
      component: tableau_bordVue, 
      children: [
        // tableau de bord
        {name: 'tableau de bord', path: '/tableau_bord/tableau_bord/dashboard', component: dashboardVue }, //ok

        // personnels
        {name: 'personnel', path: '/tableau_bord/tableau_bord/ecran2', component: personnelVue }, //ok
        {name: 'gestion personnel', path: '/tableau_bord/tableau_bord/ecran3', component: gestion_personnelVue }, //ok
        {name: "droit d'acces", path: '/tableau_bord/tableau_bord/ecran4', component: droit_accesVue }, //ok
        {name: 'edtions', path: '/tableau_bord/tableau_bord/edtions', component: editionsVue }, //ok

        {name: 'candidats', path: '/tableau_bord/tableau_bord/candidats', component: candidatVue }, //ok

        // Clients
        {name: "clients", path: '/tableau_bord/tableau_bord/clients', component: clientsVue },//ok
        {name: "appel d'offre", path: '/tableau_bord/tableau_bord/appel_offre', component: appel_offreVue },//ok
        {name: "gestion_client", path: '/tableau_bord/tableau_bord/gestion_clients', component: gestion_clientsVue },//ok

        // comptabilité
        {name: "comptabilite", path: '/tableau_bord/tableau_bord/comptabilite', component: comptabiliteVue },//ok
        {name: "suivie payements et depenses", path: '/tableau_bord/tableau_bord/suivie_payement_depenses', component: suivie_debit_creditVue },//ok
        {name: "payement", path: '/tableau_bord/tableau_bord/payement', component: payementVue },//ok

        // tests
        {name: 'tests', path: '/tableau_bord/tableau_bord/tests', component: test },//ok
        {name: 'creer test', path: '/tableau_bord/tableau_bord/creation_tests', component: creer_test },//ok
        {name: 'enregistrer test', path: '/tableau_bord/tableau_bord/enregistrer_tests', component: enregister_test },//ok


        {name: 'Piste audit ', path: '/tableau_bord/tableau_bord/piste_audit', component: piste_auditVue }, //ok
        {name: "Sauvegardes/Restauration", path: '/tableau_bord/tableau_bord/sauvegardes_Restauration', component: sauvegardes_restaurationsVue }, //ok

      ],
    },
    {
      path: '/',
      name: 'home',
      component: PageAccueil, 
      children: [
        // tableau de bord
        {name: 'Acceuil dashboard',
         path: 'tableau_bord', 
         component: tableau_bordVue, 
      }, //ok
       
      ],
    }
  ]
})

export default router
