import React from 'react'
import TitleDescription from '../atoms/TitleDescription'
import AvatarGallery from '../organisms/AvatarGallery'

function Users() {
  return (
    <div className="w-full bg-bg-section-purple flex items-center justify-center flex-col gap-y-5 py-28">
        <TitleDescription
            title="ما بهترین هارو داریم ! 🥤"
            description="توی کمترین مدت به دلیل بالا بودن لینک هامون به آدم های مختلف"
        />
        <AvatarGallery />
        <TitleDescription
            description="# و هزاران نفر دیگر"
        />
    </div>
  )
}

export default Users
