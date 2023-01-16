import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import { numberFormat } from "@/Libs/helper";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-hot-toast";
import Table from "@/Components/Table";
import Card from "@/Components/Card";
import DropdownMenu from "@/Components/DropdownMenu";

export default function Index({ carts }) {
    const onDeleteHandler = (cart_id) => {
        Inertia.post(
            route("cart.delete", cart_id),
            { _method: "delete" },
            {
                onSuccess: () => toast.success("Removed"),
            }
        );
    };

    let subtotal = carts.reduce((acc, cart) => acc + cart.price, 0);
    let ppn = (11 / 100) * subtotal;
    let total = carts.reduce((acc, cart) => acc + cart.price_tax, 0);

    return (
        <div>
            <div>
                <Head title="Your Carts" />

                <Header
                    title="Your Cart"
                    description="Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak"
                />

                <Container>
                    <Card>
                        <Card.Header>Your cart</Card.Header>

                        <Card.Table>
                            <Table>
                                <Table.Thead>
                                    <tr>
                                        <Table.Th className="w-0">#</Table.Th>
                                        <Table.Th>Name</Table.Th>
                                        <Table.Th className="text-right">
                                            Price
                                        </Table.Th>
                                        <Table.Th></Table.Th>
                                    </tr>
                                </Table.Thead>

                                <tbody>
                                    {carts.length ? (
                                        <>
                                            {/* PRODUK DI KERANJANG */}
                                            {carts.map((cart, i) => (
                                                <tr key={cart.id}>
                                                    <Table.Td className="w-0">
                                                        {i + 1}
                                                    </Table.Td>

                                                    <Table.Td>
                                                        <Link
                                                            href={`/products/${cart.product.slug}`}
                                                        >
                                                            {cart.product.name}
                                                        </Link>
                                                    </Table.Td>

                                                    <Table.Td className="text-right">
                                                        {numberFormat(
                                                            cart.price
                                                        )}
                                                    </Table.Td>

                                                    <Table.Td className="text-right">
                                                        <button
                                                            onClick={() =>
                                                                onDeleteHandler(
                                                                    cart.id
                                                                )
                                                            }
                                                            className="focus:outline-none inline"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke="currentColor"
                                                                className="w-5 h-5"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </Table.Td>
                                                </tr>
                                            ))}

                                            {/* PPN */}
                                            <tr>
                                                <td></td>

                                                <Table.Td>PPN (11%)</Table.Td>

                                                <Table.Td className="text-right">
                                                    {numberFormat(ppn)}
                                                </Table.Td>
                                            </tr>

                                            {/* TOTAL */}
                                            <tr className="bg-blue-50 text-blue-900 font-semibold">
                                                <td></td>

                                                <Table.Td>Total</Table.Td>

                                                <Table.Td className="text-right">
                                                    Rp {numberFormat(total)}
                                                </Table.Td>

                                                <td></td>
                                            </tr>
                                        </>
                                    ) : (
                                        <Table.Empty
                                            colSpan={4}
                                            message={
                                                <>
                                                    The cart is currently empty.
                                                    <br />
                                                    <Link
                                                        href="/products"
                                                        className="text-blue-500 underline"
                                                    >
                                                        Try add new one
                                                    </Link>
                                                </>
                                            }
                                        />
                                    )}
                                </tbody>
                            </Table>
                        </Card.Table>
                    </Card>

                    {carts.length > 0 ? (
                        <div className="mt-4 flex justify-end">
                            <DropdownMenu
                                buttonClassName="bg-blue-600 text-white px-4 py-2 rounded-lg"
                                InputLabel="Payment method"
                            >
                                <DropdownMenu.Link
                                    href="/invoice"
                                    method="post"
                                    as="button"
                                    data={{
                                        carts: carts,
                                        total: total,
                                        payment_type: "gopay",
                                    }}
                                >
                                    Gopay
                                </DropdownMenu.Link>
                                <DropdownMenu.Divider />
                                <DropdownMenu.Link
                                    href="/invoice"
                                    method="post"
                                    as="button"
                                    data={{
                                        carts: carts,
                                        total: total,
                                        payment_type: "bank_transfer",
                                        bank: "bca",
                                    }}
                                >
                                    BCA Virtual Account
                                </DropdownMenu.Link>
                                <DropdownMenu.Link
                                    href="/invoice"
                                    method="post"
                                    as="button"
                                    data={{
                                        carts: carts,
                                        total: total,
                                        payment_type: "bank_transfer",
                                        bank: "bni",
                                    }}
                                >
                                    BNI Virtual Account
                                </DropdownMenu.Link>
                            </DropdownMenu>
                        </div>
                    ) : null}
                </Container>
            </div>
        </div>
    );
}

Index.layout = (page) => <App children={page} />;
