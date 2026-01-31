import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import ForInstitutions from '../views/ForInstitutions.vue'
import AcademyHallOfFame from '../views/AcademyHallOfFame.vue'
import ChathurvidhCompetition from '../views/ChathurvidhCompetition.vue'
import Electronics from '../views/Electronics.vue'
import Books from '../views/Books.vue'
import Robots from '../views/Robots.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/institutions',
    name: 'ForInstitutions',
    component: ForInstitutions
  },
  {
    path: '/student-zone',
    redirect: '/student-zone/academy'
  },
  {
    path: '/student-zone/academy',
    name: 'AcademyHallOfFame',
    component: AcademyHallOfFame
  },
  {
    path: '/student-zone/chathurvidha',
    name: 'ChathurvidhCompetition',
    component: ChathurvidhCompetition
  },
  {
    path: '/store',
    redirect: '/store/electronics'
  },
  {
    path: '/store/electronics',
    name: 'Electronics',
    component: Electronics
  },
  {
    path: '/store/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/store/robots',
    name: 'Robots',
    component: Robots
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
