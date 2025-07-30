<template>
  <div class="min-h-screen bg-gray-50 dark:bg-slate-900">
    <TopBar />
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <ContactModal />
    <BrochureModal />
  </div>
</template>
