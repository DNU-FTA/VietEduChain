"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/config';
import { EDUMARKET_CONTRACT_ADDRESS } from '@/contract-addresses';
import { Card, Input, Button, Table, message as antdMessage, Space, Typography, Form } from 'antd';

interface CourseNFT {
  id: string;
  creator: string;
  owner: string;
  metadata: string;
  price: string;
  sold: boolean;
}

export default function Page() {
  const [nfts, setNfts] = useState<CourseNFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mintData, setMintData] = useState({ id: '', metadata: '', price: '', creator: '' });
  const [buyId, setBuyId] = useState('');
  const [buyer, setBuyer] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchNFTs();
  }, []);

  async function fetchNFTs() {
    setLoading(true);
    try {
      const contractAddress = EDUMARKET_CONTRACT_ADDRESS;
      const query = btoa(JSON.stringify({ get_all_nfts: {} }));
      const res = await fetch(`${API_BASE_URL}/cosmwasm/wasm/v1/contract/${contractAddress}/smart/${query}`);
      const data = await res.json();
      setNfts(data.nfts || []);
      setError(null);
    } catch (e: any) {
      setError('Failed to load NFTs');
    }
    setLoading(false);
  }

  async function handleMint(values: typeof mintData) {
    setMessage('');
    try {
      const contractAddress = EDUMARKET_CONTRACT_ADDRESS;
      const sender = values.creator;
      const msg = {
        mint_nft: {
          id: values.id,
          metadata: values.metadata,
          price: values.price
        }
      };
      const payload = {
        type: 'cosmwasm/MsgExecuteContract',
        value: {
          sender,
          contract: contractAddress,
          msg,
          funds: []
        }
      };
      const res = await fetch(`${API_BASE_URL}/cosmwasm/wasm/v1/tx`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.txhash) {
        setMessage('Minted successfully!');
        antdMessage.success('Minted successfully!');
        setMintData({ id: '', metadata: '', price: '', creator: '' });
        fetchNFTs();
      } else {
        setMessage(data.detail || 'Mint failed');
        antdMessage.error(data.detail || 'Mint failed');
      }
    } catch (e: any) {
      setMessage('Mint failed');
      antdMessage.error('Mint failed');
    }
  }

  async function handleBuy(values: { id: string; buyer: string; amount: string }) {
    setMessage('');
    try {
      const contractAddress = EDUMARKET_CONTRACT_ADDRESS;
      const sender = values.buyer;
      const msg = {
        buy_nft: {
          id: values.id
        }
      };
      const payload = {
        type: 'cosmwasm/MsgExecuteContract',
        value: {
          sender,
          contract: contractAddress,
          msg,
          funds: [{ denom: 'evnd', amount: values.amount }]
        }
      };
      const res = await fetch(`${API_BASE_URL}/cosmwasm/wasm/v1/tx`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.txhash) {
        setMessage('Bought successfully!');
        antdMessage.success('Bought successfully!');
        setBuyId('');
        setBuyer('');
        setAmount('');
        fetchNFTs();
      } else {
        setMessage(data.detail || 'Buy failed');
        antdMessage.error(data.detail || 'Buy failed');
      }
    } catch (e: any) {
      setMessage('Buy failed');
      antdMessage.error('Buy failed');
    }
  }

  return (
    <Card style={{ maxWidth: 1000, margin: '32px auto' }}>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
        EduMarket – Course NFT Marketplace
      </Typography.Title>
      <Space direction="horizontal" style={{ width: '100%', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 32 }}>
        {/* Mint NFT Group */}
        <Card title="Mint Course NFT" style={{ flex: 1, minWidth: 320 }}>
          <Form layout="vertical" onFinish={handleMint} initialValues={mintData}>
            <Form.Item label="ID" name="id" rules={[{ required: true, message: 'ID is required' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Metadata" name="metadata" rules={[{ required: true, message: 'Metadata is required' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Price is required' }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Creator" name="creator" rules={[{ required: true, message: 'Creator is required' }]}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Mint
              </Button>
            </Form.Item>
          </Form>
        </Card>
        {/* Buy NFT Group */}
        <Card title="Buy Course NFT" style={{ flex: 1, minWidth: 320 }}>
          <Form layout="vertical" onFinish={handleBuy} initialValues={{ id: buyId, buyer, amount }}>
            <Form.Item label="Course ID" name="id" rules={[{ required: true, message: 'Course ID is required' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Buyer" name="buyer" rules={[{ required: true, message: 'Buyer is required' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Amount" name="amount" rules={[{ required: true, message: 'Amount is required' }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Buy
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
      {message && <Typography.Paragraph style={{ color: 'green', marginBottom: 16, textAlign: 'center', fontWeight: 500 }}>{message}</Typography.Paragraph>}
      <Card title="All Course NFTs" style={{ marginTop: 24 }}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : nfts.length === 0 ? (
          <div>No NFTs found.</div>
        ) : (
          <Table
            dataSource={nfts}
            rowKey="id"
            pagination={false}
            columns={[
              { title: 'ID', dataIndex: 'id' },
              { title: 'Creator', dataIndex: 'creator' },
              { title: 'Owner', dataIndex: 'owner' },
              { title: 'Metadata', dataIndex: 'metadata' },
              { title: 'Price', dataIndex: 'price' },
              { title: 'Sold', dataIndex: 'sold', render: (sold: boolean) => (sold ? 'Yes' : 'No') },
            ]}
            style={{ marginTop: 16 }}
          />
        )}
      </Card>
    </Card>
  );
}
