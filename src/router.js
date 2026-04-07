import { createRouter, createWebHistory } from 'vue-router'
import LegacyPageFrame from '@/components/LegacyPageFrame.vue'

const legacyPages = [
  'homepage.html',
  'userloginpage.html',
  'adminlogin.html',
  'registerpage.html',
  'admindashboard.html',
  'comingsoon.html',
  'consultForm.html',
  'consultForm1.html',
  'pageloader.html',
  'rate.html',
]

const legacyRoutes = legacyPages.flatMap((page) => {
  const baseName = page.replace('.html', '')
  return [
    {
      path: `/${baseName}`,
      name: baseName,
      component: LegacyPageFrame,
      props: { page },
    },
    {
      path: `/${page}`,
      name: `${baseName}-html`,
      component: LegacyPageFrame,
      props: { page },
    },
  ]
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/homepage',
    },
    ...legacyRoutes,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/homepage',
    },
  ],
})

export default router
