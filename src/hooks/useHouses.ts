import { useQuery } from "@apollo/client"
import { GET_HOUSES, GET_HOUSE } from "@/graphql/queries"
import { HpHouse } from "@/types/house"

export function useHouses() {
  const { data, loading, error } = useQuery(GET_HOUSES)
  return {
    houses: (data?.houses ?? []) as HpHouse[],
    loading,
    error: error?.message,
  }
}

export function useHouse(name: string) {
  const { data, loading, error } = useQuery(GET_HOUSE, {
    variables: { name },
  })
  return {
    house: (data?.house ?? null) as HpHouse | null,
    loading,
    error: error?.message,
  }
}
