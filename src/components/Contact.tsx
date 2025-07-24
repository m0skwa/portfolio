"use client";

import {
    Button,
    Card,
    Field,
    Input,
    Stack,
    Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactArea() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        if (!fullName || !email || !message) {
            toast.error("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName, email, message, status: "new" }),
            });

            if (response.ok) {
                toast.success("Message sent successfully!");
                setFullName("");
                setEmail("");
                setMessage("");
            } else {
                const errorData = await response.json();
                toast.error(
                    errorData.message || "Failed to send message. Try again later."
                );
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Could not connect to the server.");
        }
    };

    return (
        <>
            <Card.Root width="540px" className="card">
                <Card.Header>
                    <Card.Title>Contact Me</Card.Title>
                    <Card.Description>
                        Fill in the form below to contact me.
                    </Card.Description>
                </Card.Header>
                <Card.Body>
                    <Stack gap="4" w="full">
                        <Field.Root>
                            <Field.Label>Full Name</Field.Label>
                            <Input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>E-Mail</Field.Label>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>Your Message</Field.Label>
                            <Textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Field.Root>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="solid" onClick={handleSubmit}>
                        Send
                    </Button>
                </Card.Footer>
            </Card.Root>
        </>
    );
}
