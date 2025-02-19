import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
    return (
        <div className="p-5 border rounded-xl">
            <h1 className="font-bold">Products Page</h1>
            <Button>FSW 7.0</Button>
            <Input placeholder="Bora fechar esse projeto" />
        </div>
    );
}

export default ProductPage;