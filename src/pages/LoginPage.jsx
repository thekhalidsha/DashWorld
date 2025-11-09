import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_REGEX } from '../utils/passwordValidation';
import { Button, Card, Form, Alert, Row, Col } from 'react-bootstrap';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import loginImage from '../assets/login_vector.png';
import { SlSocialGoogle } from 'react-icons/sl';

const DEFAULTS = { email: 'test@user.com', password: 'Password1!' };

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: DEFAULTS });
    const { isAuthenticated, login, error, setError } = useAuth();
    const navigate = useNavigate();

    const onSubmit = data => {
        const ok = login(data);
        setTimeout(() => {
            if (localStorage.getItem('isAuthenticated') === 'true') navigate('/home');
        }, 150);
    };
    React.useEffect(() => () => { setError(null); }, [setError]);

    return (
        <Row className="min-vh-100 g-0">
            <Col xs={12} md={6} className="d-flex align-items-center justify-content-center bg-white">

                <div style={{ maxWidth: 350, width: '100%' }}>
                    <h2 style={{ fontWeight: 600, marginBottom: 8 }}>Sign In</h2>
                    <div className="mb-2" style={{ fontSize: '0.97rem', color: "#222" }}>
                        New user? <a href="#" style={{ color: "#416bc3", fontWeight: 500 }}>Create an account</a>
                    </div>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-2" controlId="formEmail">
                            <Form.Label style={{ fontWeight: 400 }}>Username or email</Form.Label>
                            <Form.Control
                                {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                                type="email"
                                isInvalid={!!errors.email}
                                style={{
                                    border: '1px solid #222',
                                    borderRadius: 0,
                                    fontSize: '0.97rem',
                                    height: 38,
                                    marginBottom: 0
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email ? "Valid email is required." : ""}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formPassword">
                            <Form.Label style={{ fontWeight: 400 }}>Password</Form.Label>
                            <Form.Control
                                {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    pattern: PASSWORD_REGEX,
                                })}
                                type="password"
                                isInvalid={!!errors.password}
                                style={{
                                    border: '1px solid #222',
                                    borderRadius: 0,
                                    fontSize: '0.97rem',
                                    height: 38,
                                    marginBottom: 0
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password
                                    ? "Min 8 chars, 1 upper, 1 number, 1 symbol."
                                    : ""}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-2 d-flex align-items-center" controlId="formKeepSignedIn">
                            <Form.Check
                                type="checkbox"
                                {...register("persist")}
                                id="persist"
                                inline
                                style={{ marginRight: 8 }}
                            />
                            <Form.Label htmlFor="persist" style={{ marginBottom: 0, fontSize: '0.98rem' }}>
                                Keep me signed in
                            </Form.Label>
                        </Form.Group>

                        <Button
                            type="submit"
                            variant="dark"
                            className="w-100 mb-0"
                            style={{ borderRadius: 0, height: 40, fontWeight: 500, fontSize: '1.01rem' }}>
                            Sign In
                        </Button>
                    </Form>
                    <div className="d-flex align-items-center my-3">
                        <hr className="w-50" />
                        <span className="mx-2 text-nowrap" style={{ color: "#888", fontSize: "12px" }}>Or Sign In With</span>
                        <hr className="w-50" />
                    </div>
                    <div className="d-flex justify-content-center gap-3 mb-1">
                        <Button variant="outline-dark border border-dark border-2" style={{ borderRadius: "50%", width: 40, height: 40, padding: 5 }}>
                            <SlSocialGoogle size={22} />
                        </Button>
                        <Button variant="outline-dark border border-dark border-2" style={{ borderRadius: "50%", width: 40, height: 40, padding: 5 }}>
                            <Facebook size={22} />
                        </Button>
                        <Button variant="outline-dark border border-dark border-2" style={{ borderRadius: "50%", width: 40, height: 40, padding: 5 }}>
                            <Linkedin size={22} />
                        </Button>
                        <Button variant="outline-dark border border-dark border-2 fw-bold" style={{ borderRadius: "50%", width: 40, height: 40, padding: 5 }}>
                            <Twitter size={22} />
                        </Button>
                    </div>
                </div>
            </Col>

            <Col md={6} className="d-none d-md-flex align-items-center justify-content-center position-relative">
                <img src={loginImage}
                    alt="Illustration"
                    style={{
                        width: '80%'
                    }} />
            </Col>
        </Row>
    );
}
