"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calculator, ChevronRight, Lightbulb, ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { Loader } from "@/components/mine/loader"

const data2 = {
  masses: [5.972, 7.348],
  distance: 384400,
  gravitational_constant: 6.6743e-11,
  steps: [
    "Identify the masses (m1 and m2) and the distance (r) between the two objects.",
    "Multiply the masses (m1 and m2) together.",
    "Divide the product of the masses by the square of the distance (r^2).",
    "Multiply the result by the gravitational constant (G)."
  ],
  hints: [
    "Look for the values of m1, m2, and r in the problem statement.",
    "Take the values of m1 and m2 and calculate their product.",
    "Take the product of the masses and divide it by r^2, where r is the distance.",
    "Multiply the final result by G to get the gravitational force."
  ],
  force: 198200000000000000000
}

export default function GravitationalForceCard() {

  const [showHints, setShowHints] = useState(false)
  const [data, setData] = useState(data2)
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {

    fetch('https://django-gravitational-api.onrender.com/ontology')
    .then(res => res.json())
    .then(data => {console.log('data received');console.log(data);setData(data);})
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    
  }, [])

  useEffect(() => {
    if(data) setLoading(false)

  }, [data])

  console.log('loading')
  console.log(loading)
  console.log(loading)

  return (
    <div className="pt-20">
        
    <Link href="/gravitational" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
    </Link>
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Gravitational Force Calculator Example</CardTitle>
        <CardDescription>
          Calculate the gravitational force between two objects using Newton's law of universal gravitation.
        </CardDescription>
      </CardHeader>
      
      {
      !loading 
      ?
      <CardContent className="space-y-6">
        <div className="bg-secondary p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Calculator className="mr-2" /> Example Calculation
          </h3>
          <p className="mb-2">Given:</p>
          <ul className="list-disc list-inside mb-2 space-y-1">
            <li>Masses: m1 = {data && data?.masses[0]} kg, m2 = {data && data?.masses[1]} kg</li>
            <li>Distance: r = {data && data?.distance} km</li>
            <li>Gravitational constant: G = {data && data?.gravitational_constant} N(m/kg)^2</li>
          </ul>
          <p className="font-semibold">
            Calculated Force: {data && data?.force.toExponential(4)} N
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Steps to Calculate</h3>
          <ol className="list-decimal list-inside space-y-2">
            {data && data?.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="mr-2 mt-1 flex-shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <Button
            variant="outline"
            onClick={() => setShowHints(!showHints)}
            className="mb-2"
          >
            {showHints ? "Hide Hints" : "Show Hints"}
          </Button>
          {showHints && (
            <Accordion type="single" collapsible className="w-full">
              {data && data?.hints.map((hint, index) => (
                <AccordionItem key={index} value={`hint-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="flex items-center">
                      <Lightbulb className="mr-2" /> Hint {index + 1}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>{hint}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </CardContent>
      :
      <Loader size={250} />
      }
    </Card>
    </div>
  )
}