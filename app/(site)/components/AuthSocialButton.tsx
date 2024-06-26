import React from 'react'
import { IconType } from 'react-icons'

interface AuthSocialButtonProps {
    icon: IconType;
    onclik: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ icon: Icon, onclik }) => {
    return (
        <button
            type='button'
            onClick={onclik}
            className='
      inline-flex
        w-full
      justify-center
      rounded-md
      bg-white
      px-4
      py-2
      text-gray-500
      shadow-sm
      ring-1
      ring-inset
      ring-gray-300
      hover:ring-gray-300
      focus:outline-offset-0  
      '>
            <Icon />
        </button>
    )
}

export default AuthSocialButton;
