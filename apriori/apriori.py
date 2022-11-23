# Author: Fabrício G. M. de Carvalho, Ph.D
# Students: Bruno Pisciotta, Daniel Luciano dos Santos Filho, Gustavo Leandro dos Santos

import numpy as np
import pandas as pd

# Leitura do Csv
compras_df = pd.read_csv("./db.csv", encoding='utf-8-sig', sep='\s*,\s*', engine='python')

# Formação de lista de produtos por compra
# e lista de produtos em geral
produtos_compra = []
produtos_geral = []

for name, group in compras_df.head(1000).groupby("id_compra"):
    produtos = []
    for produto in group["produto"]:
        produtos.append(produto)
        produtos_geral.append(produto)
    produtos_compra.append(produtos)

itemset = list(set(produtos_geral))
transacoes = produtos_compra 

# Cálculo de suporte
def support(Ix, Iy, bd):
    sup = 0
    for transaction in bd:
        if (Ix.union(Iy)).issubset(transaction):
            sup+=1
    sup = sup/len(bd)
    return sup

# Cálculo de confiança
def confidence(Ix, Iy, bd):
    Ix_count = 0
    Ixy_count = 0
    for transaction in bd:
        if Ix.issubset(transaction):
            Ix_count+=1
            if (Ix.union(Iy)).issubset(transaction):
                Ixy_count += 1
    conf = Ixy_count / Ix_count
    return conf

# Eliminando itens em ass_rules cujo sup < min_sup
# e conf < min_conf
def prune(ass_rules, min_sup, min_conf):
    pruned_ass_rules = []
    for ar in ass_rules:
        if ar['support'] >= min_sup and ar['confidence'] >= min_conf:
            pruned_ass_rules.append(ar)
    return pruned_ass_rules

# Apriori para associação entre 2 itens
def apriori_2(itemset, bd, min_sup, min_conf):
    ass_rules = []
    ass_rules.append([]) #level 1 (large itemsets)
    for item in itemset:
        sup = support({item},{item},bd)
        ass_rules[0].append({'rule': str(item), \
                             'support':sup, \
                             'confidence': 1})        
    ass_rules[0] = prune(ass_rules[0],min_sup, min_conf)
    ass_rules.append([]) #level 2 (2 items association)
    for item_1 in ass_rules[0]:
        for item_2 in ass_rules[0]:
            if item_1['rule'] != item_2['rule']:
                rule = item_1['rule']+'_'+item_2['rule']
                Ix = {item_1['rule']}
                Iy = {item_2['rule']}
                sup = support(Ix,Iy, bd)
                conf = confidence(Ix, Iy, bd)
                ass_rules[1].append({'rule':rule, \
                                     'support': sup, \
                                     'confidence': conf})
    ass_rules[1] = prune(ass_rules[1],min_sup, min_conf)
    return ass_rules

print(transacoes)
rules_1_item = []
rules_2_items = []
rules = apriori_2(itemset, transacoes, 0.4, 0.6)
for rule in rules:
    for r in rule:
        print(r)
        if "_" in r['rule']:
            rules_2_items.append(r['rule'])
        else:
            rules_1_item.append(r['rule'])
print("")
print("========= REGRAS DE 1 ITEM ========")
print(rules_1_item)
print("")
print('========= REGRAS DE 2 ITENS ========')
print(rules_2_items)
print("")
cont = input('Press enter to continue...')

item = input('Insira um item: ')
produtos_recomendados = []
for rules in rules_2_items:
    if item in rules:
        rule_items = rules.split('_')
        for r_item in rule_items:
            if r_item != item:
                if r_item not in produtos_recomendados:
                    produtos_recomendados.append(r_item)

print("")
print(f"========= PRODUTOS RECOMENDADOS PARA {item.upper()} =========")
for produto in produtos_recomendados:
    print(produto.upper())
