'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Menu } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Gravitational constant (approximate value)
const G = 6.674e-11

export function GravitationalForceCalculator() {
  const [mass1, setMass1] = useState('')
  const [mass2, setMass2] = useState('')
  const [distance, setDistance] = useState('')
  const [force, setForce] = useState(null)
  const [error, setError] = useState(null)

  const {push} = useRouter()

  const calculateForce = () => {
    if (mass1 === '' || mass2 === '' || distance === '') {
      setError('Please fill in all fields')
      return
    }

    if (distance === 0) {
      setError('Distance cannot be zero')
      return
    }

    const calculatedForce = G * (mass1 * mass2) / (distance * distance)
    setForce(calculatedForce)
    setError(null)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      {/* <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Gravitational Force Calculator</CardTitle>
      </CardHeader> */}
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 pt-5">
          <div>
            <Label htmlFor="mass1">Mass of Object 1 (kg)</Label>
            <Input
              id="mass1"
              type="number"
              value={mass1}
              onChange={(e) => setMass1(parseFloat(e.target.value) || '')}
              placeholder="Enter mass 1"
            />
          </div>
          <div>
            <Label htmlFor="mass2">Mass of Object 2 (kg)</Label>
            <Input
              id="mass2"
              type="number"
              value={mass2}
              onChange={(e) => setMass2(parseFloat(e.target.value) || '')}
              placeholder="Enter mass 2"
            />
          </div>
          <div>
            <Label htmlFor="distance">Distance (m)</Label>
            <Input
              id="distance"
              type="number"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value) || '')}
              placeholder="Enter distance"
            />
          </div>
        </div>

        <Button onClick={calculateForce} className="w-full mb-4">Calculate Force</Button>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {force !== null && (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Gravitational Force:</h3>
            <p className="text-2xl font-bold">{force.toExponential(4)} N</p>
          </div>
        )}

        <div className="mt-8 flex justify-center items-center space-x-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            m₁
          </div>
          <ArrowRight className="w-8 h-8 text-gray-500" />
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
            m₂
          </div>
        </div>
        <p className="text-center mt-2 text-sm text-gray-500">Visualization of the two masses</p>
        
        <Button variant="outline" onClick={() => push('/example')} className="w-full mb-4">See an example</Button>

      </CardContent>
    </Card>
  )
}








export default function Gravitational() {

  const [total, setTotal] = useState('')
  const [result, setResult] = useState(null)

  // const calculateRatio = () => {
  //   const totalNumber = parseFloat(total)
  //   if (isNaN(totalNumber) || totalNumber <= 0) {
  //     alert('Please enter a valid positive number')
  //     return
  //   }

  //   const larger = (totalNumber * 70) / 100
  //   const smaller = (totalNumber * 30) / 100
  //   setResult({ larger, smaller })
  // }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <main className="flex-grow container mx-auto px-4 py-16 mt-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Gravitational Force Calculator</h1>
          <p className="mb-6 text-gray-600">
          Please Input the two masses and the distance to calculate the gravitational force  
          </p>

          <GravitationalForceCalculator />
          {/* <div>
            <h2 className="text-2xl font-semibold mb-4">How it works:</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Enter the total amount in the input field.</li>
              <li>Click the "Calculate" button.</li>
              <li>The calculator will divide the total into two parts based on the 70:30 ratio.</li>
              <li>70% of the total will be assigned to the larger part.</li>
              <li>30% of the total will be assigned to the smaller part.</li>
            </ol>
          </div> */}
        </div>
      </main>

    </div>
  )
}

