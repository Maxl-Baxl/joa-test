import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function StundenplanOsInput() {
  return (
    <form action="stundenplan-oberstufe/plan">
      <Input
        className="mx-5 mb-5"
        type="text"
        name="name"
        placeholder="Nachname, Vorname"
        required
      />
      <Button className="mx-5" type="submit">
        Generiere Stundenplan
      </Button>
    </form>
  )
}
