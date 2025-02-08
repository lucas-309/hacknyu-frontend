// app/docs/page.tsx
'use client'

import { useState, FormEvent } from 'react'

interface Recommendation {
  id: number
  title: string
}

export default function FridgeCheckPage() {
  const [ingredients, setIngredients] = useState('')
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // For now just mock
    setRecommendations([
      { id: 101, title: 'Veggie Omelette' },
      { id: 102, title: 'Chicken Salad Wrap' }
    ])
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Check My Fridge</h2>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-md space-y-3">
        <label className="flex flex-col">
          <span className="font-medium">What ingredients do you have?</span>
          <input
            type="text"
            className="border rounded p-1"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </label>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Get Recommendations
        </button>
      </form>
      <div className="mt-5">
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-white p-3 rounded shadow mb-2">
            {rec.title}
          </div>
        ))}
      </div>
    </div>
  )
}
