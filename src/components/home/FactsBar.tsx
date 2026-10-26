import Container from "@/components/ui/Container";
import StatCard from "@/components/ui/StatCard";
import { locationSites } from "@/data/locations";
import { productMapGroups } from "@/data/industries";
import styles from "./home.module.css";

const productAreaCount = productMapGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);

const items = [
  { value: "1987", label: "Manufacturing since" },
  { value: String(locationSites.length), label: "Sites in Maharashtra" },
  { value: String(productMapGroups.length), label: "Product ranges" },
  { value: String(productAreaCount), label: "Product areas" },
];

export default function FactsBar() {
  return (
    <div className={styles.factsBar}>
      <Container>
        <StatCard items={items} />
      </Container>
    </div>
  );
}
