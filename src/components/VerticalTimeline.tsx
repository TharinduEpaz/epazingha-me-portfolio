import React from 'react'
import { Paintbrush, Code, Wrench } from 'lucide-react'

const timelineItems = [
  {
    title: 'Designer',
    description: 'Crafting user-centric interfaces and experiences',
    icon: Paintbrush,
    color: 'bg-pink-500',
  },
  {
    title: 'Developer',
    description: 'Building robust and scalable applications',
    icon: Code,
    color: 'bg-blue-500',
  },
  {
    title: 'Engineer',
    description: 'Architecting complex systems and solutions',
    icon: Wrench,
    color: 'bg-green-500',
  },
]

export default function ModernVerticalTimeline() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border "></div>
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`mb-8 flex items-center w-full`}
          >
            {/* <div className="order-1 w-5/12"></div> */}
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl sm:w-8 w-24 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
            </div>
            <div className="order-1 bg-gray-900 rounded-lg shadow-xl sm:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
                {item.description}
              </p>
              <div className={`mt-4 w-10 h-10 rounded-full ${item.color} flex items-center justify-center`}>
                <item.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

